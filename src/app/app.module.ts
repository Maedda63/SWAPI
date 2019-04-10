import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SpecieComponent } from './specie/specie.component';
import { StarshipComponent } from './starship/starship.component';
import { CharacterComponent } from './character/character.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FilmComponent } from './film/film.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpecieComponent,
    StarshipComponent,
    CharacterComponent,
    VehicleComponent,
    FilmComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
