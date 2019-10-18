import {
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';

  import * as fromWeather from './weather/weather.reducer';
  import { environment } from '../../environments/environment';

  export interface State {
    weatherResult: fromWeather.WeatherState;
  }

  export const reducers: ActionReducerMap<State> = {
    weatherResult: fromWeather.reducer
  };

  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
