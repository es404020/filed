import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const loadA = createAction('[Users List] Load User List via Service');

export const loadedA = createAction(
  '[Users Effect] User List Loaded Successfully',
  props<{ users: User }>()
);

export const createA = createAction(
  '[Create User Component] Create User',
  props<{ data: User }>()
);

export const deleteA = createAction(
  '[User List Operations] Delete User',
  props<{ id: number }>()
);

export const updateA = createAction(
  '[User List Operations] Update User',
  props<{ data: User }>()
);

export const userActions = {
  loadA,
  loadedA,
  createA,
  deleteA,
  updateA
};
