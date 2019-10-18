import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

export const getWeatherStateState = createFeatureSelector<WeatherState>('weatherResult');

export const getWeather = createSelector(
    getWeatherStateState,
    state => state.weather
);

export const getErrorMsg = createSelector(
    getWeatherStateState,
    state => state.errorMsg
);

export const getIcon = createSelector(
    getWeatherStateState,
    state => state.icon
);


