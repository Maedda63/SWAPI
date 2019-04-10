import { Film } from './film.model';
import { Specie } from './specie.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export interface Character {
    name: string;
    birth_year: string;
    gender: string;
    films: Film[];
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
    url: string;
}
