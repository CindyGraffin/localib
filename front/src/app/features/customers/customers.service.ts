import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from "rxjs";
import {CreateCustomer, Customer} from './types/customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}

  private handleError(error: Error, errorValue: any) {
		console.error(error);
		return of(errorValue);
	}

  getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8000/customers').pipe(
      catchError(error => this.handleError(error, []))
      )
  }

  addCustomer(customer: Partial<{ firstName: string | null; lastName: string | null; email: string | null; phone: string | null; dateOfBirth: string | null; gender: string | null; }>): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }
    return this.http.post<Customer>('http://localhost:8000/customers', customer, httpOptions).pipe(
      catchError(error => this.handleError(error, null))
    )
  }

} 