import { Action } from '@ngrx/store';
import * as fromAction from '../actions/auth.actions';
export interface State {
  name: string;
}
export const stateSelector = 'auth';
export const initialState: State = {
  name: null
};

export function reducer(
  state = initialState,
  action: fromAction.AuthActions
): State {
  switch (action.type) {
    case fromAction.AuthActionTypes.SetAuths:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// add selector for each property of the state
export const getName = (state: State) => state.name;
