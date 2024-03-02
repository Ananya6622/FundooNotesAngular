import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  submitted :boolean= false;
  constructor(private notes : NotesService) { }
  display:boolean = true;
  token:any

  ngOnInit(): void {
  }
  expanded: boolean = false;

toggleExpand() {
  this.expanded = !this.expanded;
}

notesform = new FormGroup({
  title : new FormControl('',[Validators.required]),
  note : new FormControl('',[Validators.required])
});

onCreateNote(){
  if(this.submitted = true && this.notesform.valid){
  let reqData = {
    title : this.notesform.value.title,
    note : this.notesform.value.note
  };
  this.notes.addNote(reqData).subscribe((res:any)=>{
    console.log(res);
    
  });

}
}
  
}
