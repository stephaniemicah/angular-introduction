import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: string; //'!' means optional, task here refers to [task] in html
  @Output() taskDeleted = new EventEmitter<void>(); //parent gets the value

  onDeleteClick() {
    this.taskDeleted.emit();
  }
}
