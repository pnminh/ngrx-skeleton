import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShips from './reducers/ships.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './effects/ships.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ships', fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects])
  ]
})
export class StarshipsModule { }
