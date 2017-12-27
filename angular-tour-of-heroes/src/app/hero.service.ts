import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './bnha_heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class HeroService {

	getHeroes(): Observable<Hero[]> {
		let sortedHEROES = HEROES.sort((a,b) => {
			return a.id - b.id;
		});
	  return of(sortedHEROES);
	}

  constructor() { }

}
