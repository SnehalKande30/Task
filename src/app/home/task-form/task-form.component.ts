import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  message: string = '';
  title : string = '';
  description : string = '';
  dueDate : string = '';

  @Output() messageEvent = new EventEmitter<string>();
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>) { }

  ngOnInit(): void {

  }
  savePerformanceAlert(performanceAlert){

     console.log("performanceAlert:",performanceAlert);
     this.saveClose(performanceAlert);
     }
   saveClose(performanceAlert) {
      console.log("close");
      this.title = performanceAlert.title;
      this.messageEvent.emit(performanceAlert);

      this.dialogRef.close();
    }
  close() {
    this.dialogRef.close();
  }

}
