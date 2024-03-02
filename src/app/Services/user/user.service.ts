import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any
  constructor(private httpService: HttpService) {this.token= localStorage.getItem('token') }
  register(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.httpService.postservice('User/Register', reqData, false, header)
  }

  Login(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.httpService.postservice('User/Login', reqData, false, header)
  }

  ForgetPassword(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.httpService.postservice('User/ForgotPassword?Email='+ reqData.Email,{}, false, header)
  }

  ResetPassword(reqData : any, token : any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.httpService.putservice('User/ResetPassword', reqData, true, header);
  }
}
