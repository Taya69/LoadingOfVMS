import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Load } from 'src/interfaces/load';
import { Machine } from 'src/interfaces/machine';
import { MachinesServiceService } from '../machines-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private vmsService: MachinesServiceService, private location: Location,) { }

  id : number = 0
  machine: Machine = {name: '', ram: 0, cores: 0, frequency: 0, selected: true}
  machines: Machine[] = []
  load: Load = {vmId: 0, coreLoads: [], usedMemory: 0}
  loading: boolean = true
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    interval(1000).subscribe(res => {
      this.vmsService.getMachines().subscribe(data => {
        this.machines = data;
        this.machine = this.machines.find(el => el.id! === this.id)!
        this.loading = false
      })
        this.vmsService.getLoadOfMachine(String(this.id)).subscribe(data => 
        this.load = data[0])    
    })
   
  }
  goBack(): void {
    this.location.back();
  }

}
