import { Component, OnInit } from '@angular/core';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  standalone: true,
  imports: [TodoFooterComponent, TodoAddComponent, TodoListComponent],
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completado = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completado = !this.completado;

    this.store.dispatch(actions.toggleAll({ value: this.completado }));
  }
}
