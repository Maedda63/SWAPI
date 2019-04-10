import { Character } from './character.model';
import { Planet } from './planet.model';
import { Specie } from './specie.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export interface Film {
    title: string;
    characters: Character[];
    opening_crawl: string;
    planets: Planet[];
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
    url: string;
}
