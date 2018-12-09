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
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
// the featureName must match the State name above
export const authFeatureSelector = createFeatureSelector<fromAuth.AuthState>(fromAuth.stateSelector);
export const getNameFromAuth = createSelector(
  authFeatureSelector,
  fromAuth.getName
);
export * from '../actions/auth.actions';
export * from './auth.reducer';
