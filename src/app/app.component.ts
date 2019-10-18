import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './shared-store';
import { Observable } from 'rxjs';
import { getIcon } from './shared-store/weather/weather.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerTitle = 'Weather App';

  public iconImg$: Observable<string>;

  constructor(public store: Store<State>) {
  }

  ngOnInit() {
    this.iconImg$ = this.store.select(getIcon);
  }

}
