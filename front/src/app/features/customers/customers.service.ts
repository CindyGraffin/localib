import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from "rxjs";
import {CreateCustomer, Customer} from './types/customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}

  path: string = 'http://localhost:8000/customers';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  private handleError(error: Error, errorValue: any) {
		console.error(error);
		return of(errorValue);
	};

  getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.path}`).pipe(
        catchError(error => this.handleError(error, []))
      );
  };

  addCustomer(customer: Partial<{ firstName: string | null; lastName: string | null; email: string | null; phone: string | null; dateOfBirth: string | null; gender: string | null; }>): Observable<Customer> {
    return this.http.post<Customer>(`${this.path}`, customer, this.httpOptions).pipe(
      catchError(error => this.handleError(error, null))
    );
  };

  updateCustomerById(customerId: string, customer: Customer): Observable<null> {
    return this.http.patch(`${this.path}/${customerId}`, customer, this.httpOptions).pipe(
      catchError((error) => this.handleError(error, []))
    );
  };

  deleteCustomerById(customerId: string): Observable<null> {
    return this.http.delete(`${this.path}/${customerId}`).pipe(
      catchError((error) => this.handleError(error, null))
    );
  };
} 
