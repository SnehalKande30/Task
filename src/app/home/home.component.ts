import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TaskFormComponent } from './task-form/task-form.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string;
  maxNewTasks : boolean= false;
  maxNewTasksError : string= '0';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewTask(){
   const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.componentInstance.messageEvent.subscribe((emmittedValue) => {
    console.log("this.todo.length:",this.todo.length);
    if(this.todo.length == 5){
    this.maxNewTasks = true;
    }
    if(this.todo.length < 5){
        this.todo.push(emmittedValue);
         console.log("todo:",this.todo);
         }
   });
  }

  todo = [ ];
  done = [ ];
  codeReview = [ ];
  acceptance = [ ];
    drop(event: CdkDragDrop<string[]>) {

      if (event.previousContainer === event.container) {

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {

        // forward direction
       // first to all other columns

         if(event.previousContainer.id == 'cdk-drop-list-0' && event.container.id == 'cdk-drop-list-1'){
          if(this.done.length < 4){

         transferArrayItem(event.previousContainer.data,
                                   event.container.data,
                                   event.previousIndex,
                                   event.currentIndex);
         this.maxNewTasks = false;
         this.todo = event.previousContainer.data;
         this.done = event.container.data;

        }
       }
       else if(event.previousContainer.id == 'cdk-drop-list-0' && event.container.id == 'cdk-drop-list-2'){

              transferArrayItem(event.previousContainer.data,
                                        event.container.data,
                                        event.previousIndex,
                                        event.currentIndex);
               this.maxNewTasks = false;
              this.todo = event.previousContainer.data;
              this.codeReview = event.container.data;

        }
       else if(event.previousContainer.id == 'cdk-drop-list-0' && event.container.id == 'cdk-drop-list-3'){

                     transferArrayItem(event.previousContainer.data,
                                               event.container.data,
                                               event.previousIndex,
                                               event.currentIndex);
                     this.maxNewTasks = false;
                     this.todo = event.previousContainer.data;
                     this.acceptance = event.container.data;

      }

      // second  to third and fourth
       else if(event.previousContainer.id == 'cdk-drop-list-1' && event.container.id == 'cdk-drop-list-2'){

                    transferArrayItem(event.previousContainer.data,
                                              event.container.data,
                                              event.previousIndex,
                                              event.currentIndex);
                    this.done = event.previousContainer.data;
                    this.codeReview = event.container.data;

              }
      else if(event.previousContainer.id == 'cdk-drop-list-1' && event.container.id == 'cdk-drop-list-3'){

                           transferArrayItem(event.previousContainer.data,
                                                     event.container.data,
                                                     event.previousIndex,
                                                     event.currentIndex);
                           this.done = event.previousContainer.data;
                           this.acceptance = event.container.data;

            }

     // third to  fourth
     else if(event.previousContainer.id == 'cdk-drop-list-2' && event.container.id == 'cdk-drop-list-3'){

                                transferArrayItem(event.previousContainer.data,
                                                          event.container.data,
                                                          event.previousIndex,
                                                          event.currentIndex);
                                this.codeReview = event.previousContainer.data;
                                this.acceptance = event.container.data;

                 }
       // backward direction
      // from fourth to first,second,third
     else if(event.previousContainer.id == 'cdk-drop-list-3' && event.container.id == 'cdk-drop-list-0'){

                            if(this.todo.length < 5){
                            transferArrayItem(event.previousContainer.data,
                                                      event.container.data,
                                                      event.previousIndex,
                                                      event.currentIndex);
                            this.acceptance = event.previousContainer.data;
                            this.todo = event.container.data;

                             }
                            }
       else if(event.previousContainer.id == 'cdk-drop-list-3' && event.container.id == 'cdk-drop-list-1'){

                                    if(this.done.length < 4){
                                    this.acceptance = event.previousContainer.data;
                                    this.done = event.container.data;
                                    transferArrayItem(event.previousContainer.data,
                                                              event.container.data,
                                                              event.previousIndex,
                                                              event.currentIndex);

                                    }
                             }
        else if(event.previousContainer.id == 'cdk-drop-list-3' && event.container.id == 'cdk-drop-list-2'){

                                          this.acceptance = event.previousContainer.data;
                                          this.codeReview = event.container.data;
transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);

                       }
           // from third to second, first
         else if(event.previousContainer.id == 'cdk-drop-list-2' && event.container.id == 'cdk-drop-list-0'){

                                                   if(this.todo.length < 5){
                                                   this.codeReview = event.previousContainer.data;
                                                   this.todo = event.container.data;
                                                   transferArrayItem(event.previousContainer.data,
                                                                             event.container.data,
                                                                             event.previousIndex,
                                                                             event.currentIndex);

                                                    }
                        }
          else if(event.previousContainer.id == 'cdk-drop-list-2' && event.container.id == 'cdk-drop-list-1'){

                    if(this.done.length < 4){
                    this.codeReview = event.previousContainer.data;
                    this.done = event.container.data;
                    transferArrayItem(event.previousContainer.data,
                                              event.container.data,
                                              event.previousIndex,
                                              event.currentIndex);

                     }
        }

           // from second to first
          else if(event.previousContainer.id == 'cdk-drop-list-1' && event.container.id == 'cdk-drop-list-0'){

                                 if(this.todo.length < 5){
                                  this.done = event.previousContainer.data;
                                  this.todo = event.container.data;
                                  transferArrayItem(event.previousContainer.data,
                                                            event.container.data,
                                                            event.previousIndex,
                                                            event.currentIndex);
                                  
                                   }
                       }
      }

}
    }

