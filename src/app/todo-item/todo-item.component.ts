import { Component, Input } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: TodoItem = {
    id: -1,
    name: '',
    isDone: false,
  };

  @Input() onDone = (todoId: number) => {};
  @Input() onDelete = (todoId: number) => {};
  @Input() onUndo = (todoId: number) => {};
}
