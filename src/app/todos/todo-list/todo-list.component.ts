import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from '../filtro.pipe';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FiltroPipe],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((store) => {
      this.todos = store.todos;
      this.filtroActual = store.filtro;
    });
  }
}
