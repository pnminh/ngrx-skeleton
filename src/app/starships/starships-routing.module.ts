import { RouterModule } from '@angular/router';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { ShipListComponent } from 'src/app/starships/ship-list/ship-list.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', component: ShipListComponent },
  { path: ':id', component: ShipDetailsComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule {}
