import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from "rxjs";
import {Customer} from './types/customer.type';

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

} 