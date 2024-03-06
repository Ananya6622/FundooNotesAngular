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
    return this.httpService.postservice('Note/Add-Note', reqData, true, header)
  }

  getNote(){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.getservice('Note/Get-All-Notes', true, header)
  }

  updateNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice('Note/update-note', reqData, true, header)
  }

  trashNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice('Note/Is-trash-or-not', reqData, true, header)
  }

  archiveNote(reqData: any){
    let header = {
      Headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice('Note/Is-Archieve-or-not', reqData, true, header)
  }

}
