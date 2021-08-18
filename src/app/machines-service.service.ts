import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Load } from 'src/interfaces/load';
import { Machine } from 'src/interfaces/machine';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachinesServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {     
      console.error(error); 
      return of(result as T);
    };
  }
  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>('api/vms').pipe(         
      catchError(this.handleError<Machine[]>('get machines'))
    )
  }
  // getMachineById(id: number): Observable<Machine> {
  //   const url = 'api/vms/' + id
  //   return this.http.get<Machine>(url);
  // }
  getLoadOfMachine(arrayOfId: string): Observable<Load[]>{
    return this.http.get<Load[]>(`api/loads?vmIds=${arrayOfId}`).pipe(
      catchError(this.handleError<Load[]>('get loads'))
    )
  }
}
