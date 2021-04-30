import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../models/user.model';
import { loadedA } from './user.action';

export interface UserState {
  users: User;
  editingUser: User;
}

export const initialState: UserState = {
  users: {},
  editingUser: {
    id: null,
    lastName: '',
    firstName: '',
   email: '',
   mob: null,
   phoneNumber:null
 
  }
};

export const userFeatureKey = 'users';

const _userReducer = createReducer(
  initialState,
  on(loadedA, (state, { users }) => ({ ...state, users: users }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
