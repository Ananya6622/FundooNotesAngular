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

  updateNotes(reqData:any, noteId: any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice(`Note/UpdateNote?noteid=`+noteId, reqData, true, header);
  }

  trashNotes(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice(`Note/IsTrashOrNot?noteid=`+reqData.noteId, {}, true, header);
  }

  archiveNotes(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putservice(`Note/IsArchieveOrNot?noteid=`+reqData.noteId, {}, true, header);
  }

  notesColor(reqData:any){
    console.log(reqData);
    let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' +this.token
    })
    }
    return this.httpService.putservice(`Note/AddColour?noteid=`+reqData.noteId+`&color=`+reqData.color, {}, true, header);
  }
  

}
