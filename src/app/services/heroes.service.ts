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
    return this.heroes[String(Number(idx) - 1)];
  }

  getHeroesByCasa(casa: string): Heroe[] {
    return this.heroes.filter(heroe => heroe.casa === casa);
  }

  getHeroesBySearch(termino:string): Heroe[] {
    let heroesArr: Heroe[] = [];
    let heroesArrPoderes: Heroe[] = [];

    if (termino === '') {
      return [];
    }

    termino = termino.toLowerCase();

    // filtro heroes por: nombre, bio, poderes
    heroesArr = this.heroes.filter(heroe => {
      // validar si termino=nombre heroe y termino=bio heroe.
      if (heroe.nombre.toLowerCase() === termino || heroe.bio.toLowerCase().indexOf(String(termino)) !== -1) {
        return heroe;
      }
      //valido si termino=poder de poderes.
      for (const poder of heroe.poderes) {
        const poderMinuscula = String(poder).toLowerCase();
        if (termino.includes(poderMinuscula)) {
          return heroe;
        }
      }
    });

    return heroesArr;

  }

}
