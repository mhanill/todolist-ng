import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserType } from './user.model';
import { TaskComponent } from '../../tasks/task/task.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user : UserType | undefined;
  @Input({required:true}) selected : boolean | undefined;
  @Output() select = new EventEmitter<string>() 
selectedUserId: any;

  get imagePath (){
    return 'users/'+ this.user?.avatar
  }

  onSelectUser(){
    this.select.emit(this.user?.id)
  }
}
