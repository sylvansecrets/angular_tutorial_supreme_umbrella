import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './bnha_heroes';
import { MessageService } from './message.service.ts';

@Injectable()
export class HeroService {

	getHeroes(): Observable<Hero[]> {
		let sortedHEROES = HEROES.sort((a,b) => {
			return a.id - b.id;
		});
		 this.messageService.add('HeroService: fetched heroes');
		 console.log(this.messageService);
	  return of(sortedHEROES);
	}

	constructor(private messageService: MessageService) { }
}
