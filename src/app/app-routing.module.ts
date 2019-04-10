import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';
import { SpecieComponent } from './specie/specie.component';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full'},
  { path: 'character', component: CharacterComponent },
  { path: 'vehicle', component: VehicleComponent},
  { path: 'starship', component: StarshipComponent},
  { path: 'species', component: SpecieComponent},
  { path: 'planet', component: PlanetComponent},
  { path: 'film', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
