import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { TodoItem } from '../todo-item/todo-item.model';
import { FilterType } from './enums';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
  providers: [LoggingService],
})
export class TodosFormComponent {
  @Input() todosList: TodoItem[] = [];

  todoInputNgModel = '';
  todoInputLocalRef = ''; // access only through method call
  @ViewChild('todoInputLocalRefViewChild', { static: false })
  todoInputLocalRefViewChild: ElementRef | undefined; // can access before method call

  todosFilter = [
    { id: 1, type: FilterType.ALL },
    { id: 2, type: FilterType.COMPLETED },
    { id: 3, type: FilterType.TODO },
  ];
  currentFilter = {};

  constructor(private loggingService: LoggingService) {
    console.log('loggingService', loggingService);
  }

  onAddTodoByNgModel = (e: Event) => {
    e.preventDefault();
    const randomId = Math.random() * 100;
    const isTodoExisted = !!this.todosList.find(
      (it) => it.id === randomId || it.name === this.todoInputNgModel
    );
    if (!isTodoExisted) {
      const newTodo = {
        id: randomId,
        name: this.todoInputNgModel,
        isDone: false,
      };
      this.todosList.push(newTodo);
      this.loggingService.logNewTodo(newTodo.name);
    } else alert('Todo Existed');
  };

  onAddTodoByLocalRef = (e: Event, todoInput: HTMLInputElement) => {
    e.preventDefault();
    const randomId = Math.random() * 100;
    const isTodoExisted = !!this.todosList.find(
      (it) => it.id === randomId || it.name === todoInput.value
    );
    if (!isTodoExisted) {
      const newTodo = {
        id: randomId,
        name: todoInput.value,
        isDone: false,
      };
      this.todosList.push(newTodo);
      this.loggingService.logNewTodo(newTodo.name);
    } else alert('Todo Existed');
  };

  onAddTodoByLocalRefViewChild = (e: Event) => {
    e.preventDefault();
    const randomId = Math.random() * 100;
    const isTodoExisted = !!this.todosList.find(
      (it) =>
        it.id === randomId ||
        it.name === this.todoInputLocalRefViewChild?.nativeElement.value
    );
    if (!isTodoExisted) {
      const newTodo = {
        id: randomId,
        name: this.todoInputLocalRefViewChild?.nativeElement.value,
        isDone: false,
      };
      this.todosList.push(newTodo);
      this.loggingService.logNewTodo(newTodo.name);
    } else alert('Todo Existed');
  };
}
