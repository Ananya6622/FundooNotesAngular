import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl = environment.baseUrl;
  constructor(private httpclient: HttpClient) { }

  postservice(url:string, reqData:any, token: boolean=false, httpOptions:any={}){
    return this.httpclient.post(this.baseUrl+url, reqData, token && httpOptions)
  }
  postserviceReset(url:string, reqData:any, token: boolean=true, httpOptions:any={}){
    return this.httpclient.post(this.baseUrl+url, reqData, token && httpOptions)
  }
  getservice(url:string,  token: boolean=false, httpOptions:any={}){
    return this.httpclient.post(this.baseUrl+url,  token && httpOptions)
  }
  putservice(url:string, reqData:any, token: boolean=true, httpOptions:any={}){
    return this.httpclient.post(this.baseUrl+url, reqData, token && httpOptions)
  }
}
