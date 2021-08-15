import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Load } from 'src/interfaces/load';
import { Machine } from 'src/interfaces/machine';

@Injectable({
  providedIn: 'root'
})
export class MachinesServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>('api/vms');
  }
  getMachineById(id: number): Observable<Machine> {
    const url = 'api/vms/' + id
    return this.http.get<Machine>(url);
  }
  getLoadOfMachine(arrayOfId: string): Observable<Load[]>{
    return this.http.get<Load[]>(`api/loads?vmIds=${arrayOfId}`);
  }
}
