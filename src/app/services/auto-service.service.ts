import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  private API_CARS = 'http://localhost:3000/autos'

  constructor(private service:HttpClient) { }

  getCars():Observable<any>{
    return this.service.get(this.API_CARS);
  }

  postCars(cars : any):Observable<any>{
    return this.service.post(this.API_CARS, cars);
  }

  putCars(cars: any, id:string):Observable <any>{
    this.API_CARS = `${this.API_CARS}/${id}`
    return this.service.put(this.API_CARS, cars)
  }

  deleteCars(id:string):Observable<any>{
    this.API_CARS = `${this.API_CARS}/${id}`
    return this.service.delete(this.API_CARS)
  }

}
