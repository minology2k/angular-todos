import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input('todoItem') todo: TodoItem = {
    id: -1,
    name: '',
    isDone: false,
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log('item changes', changes);
  }

  ngOnInit() {}

  ngOnDestroy() {
    alert('Destroy');
  }

  @Output() onDone = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onUndo = new EventEmitter<number>();

  onDoneTodo() {
    this.onDone.emit(this.todo.id);
  }
  onDeleteTodo() {
    this.onDelete.emit(this.todo.id);
  }
  onUndoTodo() {
    this.onUndo.emit(this.todo.id);
  }
}
