import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../shared-store';
import { getWeather, errorToDoAction } from '../../shared-store/weather/weather.action';
import { getErrorMsg } from 'src/app/shared-store/weather/weather.selectors';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  public errorMsg$: Observable<string>;

  constructor(
    private store: Store<State>) { }

  ngOnInit() {
    this.errorMsg$ = this.store.select(getErrorMsg);
  }

  public searchWeather(location: string ): void {
    const checkForNumber = new RegExp(/\d/g);
    // validate that it is not empty and not a number
    if (location && !checkForNumber.test(location)) {
      this.store.dispatch(errorToDoAction({payload: null}));
      return this.store.dispatch(getWeather({location}));
    }

    return this.store.dispatch(errorToDoAction({payload: 'Please enter a location!'}));
  }

}
