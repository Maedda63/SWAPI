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
  search: string;

  constructor(public ps: PlanetService) { }

  searchPlanet(search: string): void {
    this.ps.searchPlanet(search).subscribe( res => {
      this.research = res;
      console.log(search);
      console.log(this.research);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
