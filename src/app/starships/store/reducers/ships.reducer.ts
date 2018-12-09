import { StarShip } from '../../../models/star-ship.model';
import { ShipsActions, ShipsActionTypes } from '../actions/ships.actions';

export interface ShipsState {
  allShips: StarShip[];
}

export const initialState: ShipsState = {
  allShips: []
};

export function reducer(
  state = initialState,
  action: ShipsActions
): ShipsState {
  switch (action.type) {
    case ShipsActionTypes.LoadShips:
      return state;
    case ShipsActionTypes.SetShips:
      return { ...state, allShips: action.payload };
    default:
      return state;
  }
}
