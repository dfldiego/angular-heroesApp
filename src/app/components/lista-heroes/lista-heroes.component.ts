import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../Heroe';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  heroesComponent: Heroe[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesComponent = this._heroesService.getHeroes();
  }

}
