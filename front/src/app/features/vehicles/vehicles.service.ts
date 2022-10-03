import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Vehicle } from './types/vehicule.type';
import { handleError } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) {}

  path: string = 'http://localhost:8000/vehicles';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  getVehiclesList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.path}`).pipe(
        catchError(() => handleError([]))
      );
  };

  addVehicle(vehicle: Partial<{ vehicleModel: string | null; brand: string | null; registrationNumber: string | null; dayPrice: string | null; vehicleType: string | null; vehicleState: string | null; }>): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.path}`, vehicle, this.httpOptions).pipe(
      catchError(() => handleError(null))
    );
  };

  updateVehicleById(vehicleId: string, vehicle: Vehicle): Observable<null> {
    return this.http.patch(`${this.path}/${vehicleId}`, vehicle, this.httpOptions).pipe(
      catchError(() => handleError([]))
    );
  };

  deleteVehicleById(vehicleId: string): Observable<null> {
    return this.http.delete(`${this.path}/${vehicleId}`).pipe(
      catchError(() => handleError(null))
    );
  };
}
