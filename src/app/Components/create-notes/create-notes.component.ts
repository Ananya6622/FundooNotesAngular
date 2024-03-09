import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  @Output() refreshCreate = new EventEmitter<string>();
  submitted :boolean= false;
  notesform !: FormGroup;
  constructor(private notes : NotesService, private formbuilder: FormBuilder,private activeRoute: ActivatedRoute) { }
  
  token:any
  
  ngOnInit(): void {
    this.notesform = new FormGroup({
      title : new FormControl('',[Validators.required]),
      note : new FormControl('',[Validators.required])
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  expanded: boolean = false;

  isValid:boolean=true;



onCreateNote(){
  if(this.submitted = true && this.notesform.valid){
  let reqData = {
    title : this.notesform.value.title,
    note : this.notesform.value.note
  }
  console.log(reqData);
  this.notes.addNote(reqData).subscribe((res:any)=>{
    console.log(res);
    this.refreshCreate.emit(res)
    
  });
  this.isValid = true;

}

}
  
}
