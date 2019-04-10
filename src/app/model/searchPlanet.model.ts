import { Planet } from './planet.model';

export interface SearchPlanet {
    count: string;
    next: string;
    previous: string;
    results: Planet[];

}
