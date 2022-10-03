import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from "rxjs";
import { handleError } from '../../utils/utils';
import { Customer} from './types/customer.type';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}

  path: string = 'http://localhost:8000/customers';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.path}`).pipe(
        catchError(() => handleError([]))
      );
  };

  addCustomer(customer: Partial<{ firstName: string | null; lastName: string | null; email: string | null; phone: string | null; dateOfBirth: string | null; gender: string | null; }>): Observable<Customer> {
    return this.http.post<Customer>(`${this.path}`, customer, this.httpOptions).pipe(
      catchError(() => handleError(null))
    );
  };

  updateCustomerById(customerId: string, customer: Customer): Observable<null> {
    return this.http.patch(`${this.path}/${customerId}`, customer, this.httpOptions).pipe(
      catchError(() => handleError([]))
    );
  };

  deleteCustomerById(customerId: string): Observable<null> {
    return this.http.delete(`${this.path}/${customerId}`).pipe(
      catchError(() => handleError(null))
    );
  };
} 
