import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StarShip } from '../../models/star-ship.model';
import * as fromShipsStore from '../store/reducers';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {
  starShip$: Observable<StarShip>;
  constructor(private store: Store<fromShipsStore.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromShipsStore.LoadShips());
    this.starShip$ = this.store.select(fromShipsStore.getCurrentShip);
  }
}
