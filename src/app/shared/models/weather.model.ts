export interface Weather {
  coord: Coord;
  weather: WeatherProp[];
  base: string;
  main: Main;
  visibility: number;
  wind?: Wind;
  rain?: Rain;
  clouds: Cloud;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherProp {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Rain {
  // tslint:disable-next-line:quotemark
  "3h": number;
}

export interface Cloud {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
