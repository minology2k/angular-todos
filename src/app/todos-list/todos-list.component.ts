import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  @Input() todosList: TodoItem[] = [];

  handleDoneTodo = (todoId: number) => {
    const index = this.todosList.findIndex((it) => it.id === todoId);
    this.todosList[index].isDone = true;
  };

  handleDeleteTodo = (todoId: number) => {
    this.todosList = this.todosList.filter((it) => it.id !== todoId);
  };

  handleUndoTodo = (todoId: number) => {
    const index = this.todosList.findIndex((it) => it.id === todoId);
    this.todosList[index].isDone = false;
  };
}
