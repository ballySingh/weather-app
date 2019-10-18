import { createAction, props } from '@ngrx/store';
import { Weather } from 'src/app/shared/models/weather.model';

export const getWeather = createAction('[Weather] Get Weather ', props<{location?: string}>());

export const successGetWeather = createAction('[Weather] Set Weather', props<{ payload: Weather }>());

export const errorToDoAction = createAction('[Weather] - Weather Error', props<{ payload: string }>());
