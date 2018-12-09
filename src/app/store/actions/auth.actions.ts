import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}
export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;
  payload: string;
  constructor(name: string) {
    this.payload = name;
  }
}
export type AuthActions = LoadAuths | SetAuths;