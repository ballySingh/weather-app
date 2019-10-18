import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../shared-store';
import { Weather } from 'src/app/shared/models/weather.model';
import { getWeather } from 'src/app/shared-store/weather/weather.selectors';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit {

  public weather$: Observable<Weather>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.weather$ = this.store.select(getWeather);
  }

}
