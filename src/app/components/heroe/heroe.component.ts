import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
