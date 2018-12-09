import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { ShipListComponent } from './starships/ship-list/ship-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { HeroListComponent } from './hero-list/hero-list.component';
import { StarshipsModule } from './starships/starships.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, HeroListComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
