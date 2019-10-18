import { Action, createReducer, on } from '@ngrx/store';
import { Weather } from '../../shared/models/weather.model';
import { successGetWeather, errorToDoAction } from './weather.action';

export interface WeatherState {
  weather: Weather;
  errorMsg: string;
  icon: string;
}

export const initialState: WeatherState = {
  weather: null,
  errorMsg: null,
  icon: '01d'
};

export const questionsReducer = createReducer(
    initialState,
    on(successGetWeather, (state, { payload }) => {
      return { ...state, weather: payload, icon: payload.weather[0].icon };
    }),
    on(errorToDoAction, (state, { payload }) => {
      return { ...state, errorMsg: payload, weather: null };
    })
  );

  export function reducer(state: WeatherState, action: Action) {
    return questionsReducer(state, action);
  }
