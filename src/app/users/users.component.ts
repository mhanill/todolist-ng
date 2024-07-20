import { DUMMY_USERS } from './dummy-users';
import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,TasksComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  ourUsers = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.ourUsers.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
