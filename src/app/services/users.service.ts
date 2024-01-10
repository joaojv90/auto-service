import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_USERS = 'http://localhost:3000/users'

  constructor( private assignment:HttpClient) { }

  getUsers():Observable <any>{
    return this.assignment.get(this.API_USERS);
  }


}
