import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from "rxjs";
import {CreateCustomer, Customer} from './types/customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  private handleError(error: Error, errorValue: any) {
		console.error(error);
		return of(errorValue);
	}

  getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8000/customers').pipe(
        catchError(error => this.handleError(error, []))
      );
  }

  addCustomer(customer: Partial<{ firstName: string | null; lastName: string | null; email: string | null; phone: string | null; dateOfBirth: string | null; gender: string | null; }>): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8000/customers', customer, this.httpOptions).pipe(
      catchError(error => this.handleError(error, null))
    );
  }

  updateCustomerById(customerId: string, customer: Customer): Observable<null> {
    return this.http.patch(`http://localhost:8000/customers/${customerId}`, customer, this.httpOptions).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }

  deleteCustomerById(customerId: string): Observable<null> {
    return this.http.delete(`http://localhost:8000/customers/${customerId}`).pipe(
      catchError((error) => this.handleError(error, null))
    );
  }

} 