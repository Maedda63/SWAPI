import { Component, OnInit } from '@angular/core';
import { SearchPlanet } from '../model/searchPlanet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  research: SearchPlanet;
  searchP: string;

  constructor(public ps: PlanetService) { }

  searchPlanet(searchP: string): void {
    this.ps.searchPlanet(searchP).subscribe( res => {
      this.research = res;
      console.log(searchP);
      console.log(this.research);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
