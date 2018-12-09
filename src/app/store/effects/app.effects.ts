import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as authAction from '../actions/auth.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  @Effect()
  loadName$: Observable<Action> = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return of('Minh').pipe(map(val => new authAction.SetAuths(val)));
    })
  );
}
