import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {
  faPlus,
  faTrash,
  faRotateLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DropdownDirective } from './shared/dropdown-directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosFormComponent,
    TodosListComponent,
    TodoItemComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrash, faRotateLeft, faCheck, faPlus);
  }
}
