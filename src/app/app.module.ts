import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherEffects } from './shared-store/weather/weather.effects';
import { reducers, metaReducers } from './shared-store';
import { WeatherService } from './shared/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherSearchComponent } from './pages/weather-search/weather-search.component';
import { WeatherResultComponent } from './pages/weather-result/weather-result.component';

const STORE_EFFECTS = [WeatherEffects];
@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([...STORE_EFFECTS])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
