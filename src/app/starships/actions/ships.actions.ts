import { Action } from '@ngrx/store';

export enum ShipsActionTypes {
  LoadShipss = '[Ships] Load Shipss'
}

export class LoadShipss implements Action {
  readonly type = ShipsActionTypes.LoadShipss;
}

export type ShipsActions = LoadShipss;
