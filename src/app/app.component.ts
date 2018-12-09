import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as fromRoot from './store/reducers';
import * as authActions from './store/actions/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name$: Observable<string>;
  ngOnInit(): void {
    this.store.dispatch(new authActions.LoadAuths());
    this.name$ = this.store.select('auth');
  }
  constructor(private store: Store<fromRoot.State>) {}
}
