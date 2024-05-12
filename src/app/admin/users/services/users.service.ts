import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
  getAllUsers(param:any):Observable<any> {
    return this._HttpClient.get(`Users` , {params:param})
  }
  
  onDeleteUsers(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`)
  }



}
