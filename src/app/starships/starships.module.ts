import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { StarshipsRoutingModule } from './starships-routing.module';
import { ShipsEffects } from './store/effects/ships.effects';
import * as fromShips from './store/reducers/ships.reducer';

@NgModule({
  declarations: [ShipListComponent, ShipDetailsComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    StoreModule.forFeature('ships', fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects])
  ]
})
export class StarshipsModule {}
