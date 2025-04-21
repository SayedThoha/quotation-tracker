import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRfq, IRfqList } from '../model/Rfq';

@Injectable({
  providedIn: 'root',
})
export class RfqService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RfqTracker/';
  constructor(private http: HttpClient) {}

  createRfq(obj: IRfq): Observable<IRfq> {
    return this.http.post<IRfq>(`${this.apiUrl}CreateRFQ`, obj);
  }

  getRfqByUser(id: number): Observable<IRfqList[]> {
    return this.http.get<IRfqList[]>(`${this.apiUrl}GetRFQByUserId?userid=${id}`);
  }
  
}
