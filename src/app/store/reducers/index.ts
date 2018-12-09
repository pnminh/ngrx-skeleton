import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { RouterStateUrl } from './../router-state.service';
import * as fromAuth from './auth.reducer';

export interface State {
  auth: fromAuth.AuthState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
// the featureName must match the State name above
export const authFeatureState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.stateSelector
);
export const getNameFromAuth = createSelector(
  authFeatureState,
  fromAuth.getName
);
export const routerFeatureState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');
export const getRouterInfo = createSelector(
  routerFeatureState,
  state => state.state
);
export * from '../actions/auth.actions';
export * from './auth.reducer';
