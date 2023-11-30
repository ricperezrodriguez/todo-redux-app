import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiarCompletados,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vecer a Thanos'),
  new Todo('Salvar al mundo'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitan América'),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(borrar, (state, { id }) => state.filter((v) => v.id !== id)),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll, (state, { value }) =>
    state.map((v) => ({
      ...v,
      completado: value,
    }))
  ),

  on(limpiarCompletados, (state) => state.filter((todo) => !todo.completado))
);
