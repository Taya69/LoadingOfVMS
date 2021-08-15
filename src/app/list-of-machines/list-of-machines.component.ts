import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Load } from 'src/interfaces/load';
import { Machine } from 'src/interfaces/machine';
import { MachinesServiceService } from '../machines-service.service';

@Component({
  selector: 'app-list-of-machines',
  templateUrl: './list-of-machines.component.html',
  styleUrls: ['./list-of-machines.component.css']
})
export class ListOfMachinesComponent implements OnInit {
 
  constructor(private vmsService: MachinesServiceService, private router: Router) { }  

  machines: Machine[] = []
  loads: Load[] = []
  loading: boolean = true
  
  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.vmsService.getMachines().subscribe(data => {this.machines = data;     
        let arrayOfIds = this.machines.map(el => el.id).join(',');
        this.vmsService.getLoadOfMachine(arrayOfIds).subscribe(data => {this.loads = data})
        let arrOfSelected = localStorage.getItem('selected')?.split(',')
        for(let i = 0; i < this.machines.length; i ++) {
          this.machines[i].selected = false
          for(let y = 0; y < arrOfSelected!.length; y++) {
            if (String(this.machines[i].id!) === (arrOfSelected![y])) {
             this.machines[i].selected = true
            }
          }
        }    
       })  
       this.loading = false  
    })    
  }
  getDisable (machine: Machine): boolean {
    if (this.machines.filter(el => el.selected === true).length >=4 && machine.selected !== true) {
    
      return true
    } else  return false
  }
  getLoad(idOfMachine: number): number {    
    return this.loads.find( el => el.vmId === idOfMachine)!.usedMemory
  }  
  changeShowingLoad (machine: Machine) {   
   const index = this.machines.indexOf(machine);   
   let selectedBefor = localStorage.getItem('selected')
   const arrOfSelected = selectedBefor?.split(',')   
   this.machines[index].selected = !this.machines[index].selected;
    if (this.machines[index].selected) {
      if (arrOfSelected?.length! > 0 && arrOfSelected![0] !== '') {       
       localStorage.setItem('selected', `${selectedBefor},${machine.id}`)
      } else {
       localStorage.setItem('selected', `${machine.id}`)
      }   
    } else {     
      const arrForLocalStorage = arrOfSelected?.filter(el => el !== String(machine.id))
      localStorage.setItem('selected', arrForLocalStorage?.join(',')!)        
    }   
   }
   navigate (id : number) {
   this.router.navigate([`vm/${id}`]); 
   }
}
