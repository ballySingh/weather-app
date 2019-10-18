import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Weather } from '../models/weather.model';
import { State } from '../../shared-store';
import { Store } from '@ngrx/store';

export const MOCK_WEATHER: Weather = {
    coord: { lon: 0.07, lat: 51.56 },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
    ],
    base: 'stations',
    main: {
      temp: 8.97,
      pressure: 999,
      humidity: 100,
      temp_min: 7.78,
      temp_max: 10.56
    },
    visibility: 10000,
    wind: { speed: 4.6, deg: 230 },
    clouds: { all: 20 },
    dt: 1571384616,
    sys: {
      type: 1,
      id: 1412,
      message: 0.0088,
      country: 'GB',
      sunrise: 1571380079,
      sunset: 1571418094
    },
    timezone: 3600,
    id: 2646277,
    name: 'Ilford',
    cod: 200
  };

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public weather$: Observable<Weather>;

  constructor(
    public store: Store<State>,
    protected readonly http: HttpClient
  ) {}

  // call to openweather api
  public getWeather(location = null): Observable<Weather> {
    let params = new HttpParams();
    if (location) {
      params = params.set('q', location);
    }
    params = params
    .set('units', 'metric')
    .set('appid', '4c991eb0e3d9df493cc49cc628ab4ed3');
    return (this.weather$ = this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?`,
      {
        params
      }
    ));
  }

  // So I can use making a number of call
  public getMockWeather(location = null): Observable<Weather> {
    return of(MOCK_WEATHER);
  }

}
