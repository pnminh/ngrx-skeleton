import { Action } from '@ngrx/store';
import { ShipsActions, ShipsActionTypes } from '../actions/ships.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ShipsActions): State {
  switch (action.type) {

    case ShipsActionTypes.LoadShipss:
      return state;


    default:
      return state;
  }
}
