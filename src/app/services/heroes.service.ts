import { Injectable } from '@angular/core';
import HeroesJson from '../data/heroes.json';
import { Heroe } from '../Heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = HeroesJson;

  constructor() {
    console.log("servicio listo para usar");
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroeById(idx: string): Heroe {
    return this.heroes[idx];
  }

}
