import { Injectable } from '@angular/core';
import Heroes from '../data/heroes.json';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() {
    console.log("servicio listo para usar");
  }
}
