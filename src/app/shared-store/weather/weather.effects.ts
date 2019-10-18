import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as WeatherAction from './weather.action';
import { WeatherService } from '../../shared/services/weather.service';
import { Weather } from '../../shared/models/weather.model';



@Injectable()
export class WeatherEffects {

    getWeather$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherAction.getWeather),
      switchMap(action =>
        // search for the location via the service
        this.weatherService.getWeather(action.location).pipe(
          map((data: Weather) => {
            return WeatherAction.successGetWeather({ payload: data });
          }),
          catchError((error: Error) => {
            // if errror display the error. Their might always error message from openwether so use default error.messsge
            return of(WeatherAction.errorToDoAction({payload: error['error'].message ? error['error'].message : error.message}));
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly weatherService: WeatherService
  ) {}
}
