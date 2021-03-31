import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

}
