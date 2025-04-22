import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuotes, IRfq, IRfqList } from '../model/Rfq';

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
    return this.http.get<IRfqList[]>(
      `${this.apiUrl}GetRFQByUserId?userid=${id}`
    );
  }

  getRfqs(): Observable<IRfqList[]> {
    return this.http.get<IRfqList[]>(`${this.apiUrl}GetRFQs`);
  }

  addQuote(obj: IQuotes): Observable<IQuotes> {
    return this.http.post<IQuotes>(`${this.apiUrl}create-quote`, obj);
  }

  getRfqById(id: number): Observable<IRfq> {
    return this.http.get<IRfq>(`${this.apiUrl}GetRFQById?id=${id}`);
  }

  getAllQuotesByRfqId(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}GetAllQuotesByQfqId?rfqId=${id}`
    );
  }
}
