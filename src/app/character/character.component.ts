import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { SearchCharacter } from '../model/searchCharacter.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  research: SearchCharacter;
  search: string;

  constructor(public cs: CharacterService) { }

searchCharac(search: string): void {
    this.cs.searchCharac(search).subscribe( res => {
      this.research = res;
      console.log(this.research);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }
}
