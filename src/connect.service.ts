import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class connect {
  constructor(private http: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.http.get<any[]>('/echo/get/json');
  }

  insertData(data: any): Observable<any> {
    return this.http.post<any>('/echo/post/json', data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>('/echo/delete/json');
  }
}