import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromShipAction from '../actions/ships.actions';
import { pipe } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ShipsEffects {
  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(fromShipAction.ShipsActionTypes.LoadShips),
    pipe(
      switchMap(() => {
        return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
          map(response => {
            return new fromShipAction.SetShips(response.results);
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
