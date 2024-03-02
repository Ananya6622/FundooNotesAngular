import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private httpService: HttpService) {this.token= localStorage.getItem('token') }
  addNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.postservice('Note/AddNote', reqData, true, header)
  }

  getNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.getservice('Note/getNote', true, header)
  }

  updateNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice('Note/getNote', reqData, true, header)
  }

}
