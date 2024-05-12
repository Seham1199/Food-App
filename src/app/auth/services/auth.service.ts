import { IForgetPass, IResetPass, IVerify } from './../models/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IRegister } from '../models/auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role:string | any = '' ;
  userName:string | any = '' ;
constructor(private _HttpClient:HttpClient) {
  if (localStorage.getItem('userToken')) {
    this.getRole();
    this.getUserName()
  }

 }


getProfile(){
  let encoded:any = localStorage.getItem('userToken');
  let decoded:any = jwtDecode(encoded);
  // console.log(decoded.userGroup);
  // console.log(decoded.userName);
  localStorage.setItem('role' , decoded.userGroup);
  localStorage.setItem('userName' , decoded.userName);
  this.getRole();
  this.getUserName();
}

getRole(){
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null) {
    this.role = localStorage.getItem('role');
    // console.log(this.role)
  }
}
getUserName(){
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('userName') !== null) {
    this.userName = localStorage.getItem('userName');
   // console.log(this.userName)
  }
}


login(data:ILogin):Observable<any> {
  return this._HttpClient.post(`Users/Login` , data)
}

register(data:FormData):Observable<any> {
  return this._HttpClient.post(`Users/Register` , data)
}

forgetPass(data:IForgetPass):Observable<any> {
  return this._HttpClient.post(`Users/Reset/Request` , data)
}

resetPass(data:IResetPass):Observable<any> {
  return this._HttpClient.post(`Users/Reset` , data)
}

verify(data:IVerify):Observable<any> {
  return this._HttpClient.put(`Users/verify` , data)
}

changePassword(data:any):Observable<any>{
  return this._HttpClient.put('Users/ChangePassword', data)
}


}
