import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShipsActionTypes } from '../actions/ships.actions';

@Injectable()
export class ShipsEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ShipsActionTypes.LoadShipss));

  constructor(private actions$: Actions) {}
}
