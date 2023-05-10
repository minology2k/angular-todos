import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TodosListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() todosList: TodoItem[] = [];

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change called', changes);
  }

  ngOnInit() {
    console.log('init called');
  }

  ngDoCheck() {
    console.log('doCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    alert('Destroy');
  }

  handleToggleTodo = (todoId: number) => {
    this.todosList = this.todosList.map((it) => {
      if (it.id === todoId) {
        return {
          ...it,
          isDone: !it.isDone,
        };
      } else return it;
    });
  };

  handleDeleteTodo = (todoId: number) => {
    this.todosList = this.todosList.filter((it) => it.id !== todoId);
  };
}
