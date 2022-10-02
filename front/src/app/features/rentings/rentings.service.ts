import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { RentingPopulateType } from '../management/types/renting-populate.type';
import { Renting } from './types/renting.type';

@Injectable({
  providedIn: 'root'
})
export class RentingsService {

  constructor(private http: HttpClient) {}

  path: string = 'http://localhost:8000/rentings';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  private handleError(error: Error, errorValue: any) {
		console.error(error);
		return of(errorValue);
	};

  getRentingsList(): Observable<RentingPopulateType[]> {
    return this.http.get<RentingPopulateType[]>(`${this.path}`).pipe(
        catchError(error => this.handleError(error, []))
      );
  };

  addRenting(renting: { startDate: Date | undefined; endDate: Date | undefined; customerId: string | undefined; vehicleId: string | undefined; totalPrice: number | undefined; }): Observable<Renting> {
    return this.http.post<Renting>(`${this.path}`, renting, this.httpOptions).pipe(
      catchError(error => this.handleError(error, null))
    );
  };

  updateVehicleById(rentingId: string, vehicle: Renting): Observable<null> {
    return this.http.patch(`${this.path}/${rentingId}`, vehicle, this.httpOptions).pipe(
      catchError((error) => this.handleError(error, []))
    );
  };

  deleteRentingById(rentingId: string): Observable<null> {
    return this.http.delete(`${this.path}/${rentingId}`).pipe(
      catchError((error) => this.handleError(error, null))
    );
  };
}
