import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as fromShips from './ships.reducer';

export interface StarshipsState {
  ships: fromShips.ShipsState;
}

export const reducers: ActionReducerMap<StarshipsState> = {
  ships: fromShips.reducer
};
export interface State extends fromRoot.State {
  ships: StarshipsState;
}
export const getShipsState = createFeatureSelector<fromShips.ShipsState>('ships');
export const getAllShips = createSelector(
  getShipsState,
  (shipsState: fromShips.ShipsState) => shipsState.allShips
);
export const getAllShipsWithId = createSelector(
  getAllShips,
  allShips => {
    if (allShips && allShips.length) {
      allShips.forEach(ship => {
        const getShipIdRegex = new RegExp(/.*\/(\d+)\/$/g);
        const getShipIdMatch = getShipIdRegex.exec(ship.url);
        if (getShipIdMatch.length > 1) {
          ship.id = +getShipIdMatch[1];
        }
      });
    }
    return allShips;
  }
);
export const getCurrentShip = createSelector(
  getAllShipsWithId,
  fromRoot.getRouterInfo,
  (ships, routerInfo) => {
    if (ships && ships.length && routerInfo) {
      // convert to number
      const id = +routerInfo.params.id;
      if (id >= 0) {
        return ships.find(s => s.id === id);
      }
    }
    return null;
  }
);
export * from './ships.reducer';
export * from '../actions/ships.actions';
export * from '../effects/ships.effects';
