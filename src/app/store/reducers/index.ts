import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
// the featureName must match the State name above
const authFeatureSelector = createFeatureSelector<fromAuth.State>(fromAuth.stateSelector);
export const getName = createSelector(
  authFeatureSelector,
  fromAuth.getName
);
