import { Component, Input } from '@angular/core';
import { TasksList } from './tasks.list';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId : string | undefined;
  @Input({required:true}) userName : string | undefined;
  isStartToAddTask:boolean = false ;
  
  constructor(private tasksList: TasksList){}

  get selectedUserTasks() {
   return this.tasksList.getUserTasks(this.userId as string)
  }

  onStartAddTask(){
    this.isStartToAddTask = true;
  }

  onCloseAddTask(){
    this.isStartToAddTask = false;
  }
}
