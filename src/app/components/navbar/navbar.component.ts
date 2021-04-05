import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tipoHeroes: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getTipoHeroe(casa: string){
    this.tipoHeroes = casa;
  }

}
