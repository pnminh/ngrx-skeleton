import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AppEffects } from './store/effects/app.effects';
import { metaReducers, reducers } from './store/reducers';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './store/router-state.service';

@NgModule({
  declarations: [AppComponent, HeroListComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
    // do not import feature module here if lazy loading
    /* StarshipsModule */
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
