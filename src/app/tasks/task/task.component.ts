import { Component, Input } from '@angular/core';
import { Tasks } from '../tasks.list';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task: Tasks | undefined
}
