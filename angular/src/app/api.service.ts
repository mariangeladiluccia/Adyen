import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPaymentMethods(): Observable<any> {
    return this.http.post('localhost:3100/api/getPaymentMethods', httpOptions);
  }

  initiatePayment(data: any): Observable<any> {
    return this.http.post('localhost:3100/api/initiatePayment', data, httpOptions);
  }

  submitAdditionalDetails(data: any): Observable<any> {
    return this.http.post('localhost:3100/api/submitAdditionalDetails', data, httpOptions);
  }
}

