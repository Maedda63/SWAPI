import { Component, OnInit, EventEmitter } from '@angular/core';
import { CharacterService } from '../character.service';
import { SearchCharacter } from '../model/searchCharacter.model';
import { SearchWookieCharacter } from '../model/searchWookieCharacter.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  wresearch: SearchWookieCharacter;
  research: SearchCharacter;
  search: string;
  wookieSearch = false;

  constructor(public cs: CharacterService) { }

searchCharac(search: string): void {
    this.cs.searchCharac(search).subscribe( res => {
      this.research = res;
      console.log(search);
      console.log(this.research);
    }, error => {
      console.log(error);
    });
  }

  searchWookieCharac(search: string): void {
    this.cs.searchWookieCharac(search).subscribe( res => {
      this.wresearch = res;
      console.log(search);
      console.log(this.wresearch);
    }, error => {
      console.log(error);
    });
  }

  changeLanguage(): boolean {
    if (!this.wookieSearch) {
      return this.wookieSearch = true;
    } else {
      return this.wookieSearch = false;
    }

  }

  ngOnInit() {
  }
}
