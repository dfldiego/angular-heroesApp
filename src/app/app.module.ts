import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaHeroesComponent,
    HeroeComponent,
    DetalleHeroeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
