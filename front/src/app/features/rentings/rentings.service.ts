import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { RentingPopulateType } from '../management/types/renting-populate.type';
import { handleError } from '../../utils/utils';
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

  getRentingsList(): Observable<RentingPopulateType[]> {
    return this.http.get<RentingPopulateType[]>(`${this.path}`).pipe(
        catchError(() => handleError([]))
      );
  };

  addRenting(renting: { startDate: Date | undefined; endDate: Date | undefined; customerId: string | undefined; vehicleId: string | undefined; totalPrice: number | undefined; }): Observable<Renting> {
    return this.http.post<Renting>(`${this.path}`, renting, this.httpOptions).pipe(
      catchError(() => handleError(null))
    );
  };

  updateVehicleById(rentingId: string, vehicle: Renting): Observable<null> {
    return this.http.patch(`${this.path}/${rentingId}`, vehicle, this.httpOptions).pipe(
      catchError(() => handleError([]))
    );
  };

  deleteRentingById(rentingId: string): Observable<null> {
    return this.http.delete(`${this.path}/${rentingId}`).pipe(
      catchError(() => handleError(null))
    );
  };
}
