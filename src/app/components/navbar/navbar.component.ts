import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tipoHeroes: string = "";

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  getTipoHeroe(casa: string){
    this.tipoHeroes = casa;
  }

  buscarHeroe(termino: string) {
    console.log("termino:", termino);
    this._router.navigate(['/buscar',termino]);
  }
}
