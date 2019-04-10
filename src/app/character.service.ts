import { Injectable } from '@angular/core';
import { SearchCharacter } from './model/searchCharacter.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchWookieCharacter } from './model/searchWookieCharacter.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  SWAPI_URL = 'https://swapi.co/api/people/';

  constructor(public http: HttpClient) { }

  searchCharac(search: string): Observable<SearchCharacter> {
    return this.http.get<SearchCharacter>(
      this.SWAPI_URL +
      '?search=' +
      search +
      '&format=json'
    );
  }

  searchWookieCharac(search: string): Observable<SearchWookieCharacter> {
    return this.http.get<SearchWookieCharacter>(
      this.SWAPI_URL +
      '?search=' +
      search +
      '&format=wookiee'
    );
  }
}
