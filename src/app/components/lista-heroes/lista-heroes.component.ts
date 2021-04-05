import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../Heroe';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  heroesComponent: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
  ) { 
    this._activatedRoute.params.subscribe(param => {
      if (param['tipo-heroes'] === 'dc') {
        this.heroesComponent = this._heroesService.getHeroesByCasa("DC");
      } else if (param['tipo-heroes'] === 'marvel') {
        this.heroesComponent = this._heroesService.getHeroesByCasa("Marvel");
      }else{
        this.heroesComponent = this._heroesService.getHeroes();
        console.log(this.heroesComponent);
      }
    })
  }

  ngOnInit(): void {
    

  }

}
