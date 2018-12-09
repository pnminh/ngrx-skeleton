import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
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
