import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as fromRoot from './store/reducers';
import * as authReducer from './store/reducers/auth.reducer';
import * as authActions from './store/actions/auth.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name$: Observable<string>;
  authState$: Observable<authReducer.State>;
  ngOnInit(): void {
    this.store.dispatch(new authActions.LoadAuths());
    this.name$ = this.store.select(fromRoot.getName);
    this.authState$ = this.store.select(fromRoot.authFeatureSelector);
  }
  constructor(private store: Store<fromRoot.State>) {}
}
