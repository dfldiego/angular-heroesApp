import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../Heroe';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = _heroesService.getHeroeById(params['id']);
      console.log("this.heroe", this.heroe);

    });

  }

  ngOnInit(): void {
  }

}
