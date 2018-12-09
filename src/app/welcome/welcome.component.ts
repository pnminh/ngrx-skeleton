import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../store/reducers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name$: Observable<string>;
  authRootState$: Observable<fromRoot.AuthState>;
  constructor(private store: Store<fromRoot.State>) {
    console.log(`WelcomeComponent is created`);
  }

  ngOnInit() {
    this.store.dispatch(new fromRoot.LoadAuths());
    this.name$ = this.store.select(fromRoot.getNameFromAuth);
    this.authRootState$ = this.store.select(fromRoot.authFeatureSelector);
  }
}
