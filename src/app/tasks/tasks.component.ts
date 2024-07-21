import { Component, Input } from '@angular/core';
import { type UserType } from '../users/user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) user : UserType | undefined | unknown
}
