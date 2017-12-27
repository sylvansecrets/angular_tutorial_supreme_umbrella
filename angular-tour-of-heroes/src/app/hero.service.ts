import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './bnha_heroes';

@Injectable()

export class HeroService {

	getHeroes(): Hero[] {
		return HEROES;
	}

  constructor() { }

}
