import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class connect {
  constructor(private http: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.http.get<any[]>('/');
  }

  getTableDatafl(filt: string): Observable<any[]> {
    return this.http.post<any[]>('/', filt);
  }


  insertData(data: any): Observable<any> {
    return this.http.post<any>('/PR.php', data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>('/');
  }
}