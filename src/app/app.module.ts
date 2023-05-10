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

@NgModule({
  declarations: [
    AppComponent,
    TodosFormComponent,
    TodosListComponent,
    TodoItemComponent,
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
