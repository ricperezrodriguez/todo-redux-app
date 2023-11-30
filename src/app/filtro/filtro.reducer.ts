import { createReducer, on } from '@ngrx/store';
import { setFiltros, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos' as filtrosValidos;

export const filtroReducer = createReducer(
  initialState,
  on(setFiltros, (state, { filtro }) => filtro)
);
