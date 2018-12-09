import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import * as fromRoot from '../../store/reducers';
import { StarShip } from 'src/app/models/star-ship.model';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  starships$: Observable<StarShip[]>;
  name$: Observable<string>;
  constructor(private store: Store<fromStore.State>) {
    console.log(`ShipListComponent is created`);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadShips());
    this.starships$ = this.store.select(fromStore.getAllShipsWithId);
    this.name$ = this.store.select(fromRoot.getNameFromAuth);
  }
}
