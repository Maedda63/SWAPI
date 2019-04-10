import { Character } from './character.model';

export interface SearchCharacter {
    count: string;
    next: string;
    previous: string;
    results: Character[];

}
