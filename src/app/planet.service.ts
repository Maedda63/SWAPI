import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchPlanet } from './model/searchPlanet.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  SWAPI_URL = 'https://swapi.co/api/planets/';

  constructor(public http: HttpClient) { }

  searchPlanet(search: string): Observable<SearchPlanet> {
    return this.http.get<SearchPlanet>(
      this.SWAPI_URL +
      '?search=' +
      search +
      '&format=json'
    );
  }
}
