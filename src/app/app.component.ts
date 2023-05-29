import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('footer', { static: false }) footerDivInApp:
    | ElementRef
    | undefined;

  title = 'angular-todos';
  todosList: TodoItem[] = [
    {
      id: 1,
      name: 'work1',
      isDone: false,
    },
    {
      id: 2,
      name: 'work2',
      isDone: true,
    },
    {
      id: 3,
      name: 'work3',
      isDone: false,
    },
  ];
  switchCaseValue = 1;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    console.log('footer in App', this.footerDivInApp);
  }
}
