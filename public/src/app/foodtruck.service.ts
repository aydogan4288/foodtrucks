import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  constructor(private _http: HttpClient) { }

  getTrucks(){
    return this._http.get('/foodtrucks');
  }
  createTruck(foodTruck){
    return this._http.post('/foodtruck', foodTruck);
  }
}
