import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Output() RefreshDisplayNotes = new EventEmitter<string>();
  constructor(public dialog : MatDialog) { }
  notes:any;
  @Input() notesList:any;
  @Output() refreshDisplay = new EventEmitter<string>();
  ngOnInit(): void {
    
  }
  editNoteDialogBox(notes:any){
    const dialogbox = this.dialog.open(UpdateNotesComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log(result);
      this.refreshDisplay.emit(result)
    })
  }

}
