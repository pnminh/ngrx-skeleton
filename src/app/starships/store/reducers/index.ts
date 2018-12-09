import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as fromShips from './ships.reducer';

export interface StarshipsState {
  ships: fromShips.State;
}

export const reducers: ActionReducerMap<StarshipsState> = {
  ships: fromShips.reducer
};
export interface State extends fromRoot.State {
  ships: StarshipsState;
}

export const getShipsState = createFeatureSelector<fromShips.State>('ships');
export const getAllShips = createSelector(
  getShipsState,
  fromShips.getAllShips
);
export * from './ships.reducer';
export * from '../actions/ships.actions';
export * from '../effects/ships.effects';
