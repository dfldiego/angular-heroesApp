import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';

const routes: Routes = [
  { path: ':tipo-heroes', component: ListaHeroesComponent },
  { path: ':marvel', component: ListaHeroesComponent },
  { path: ':dc', component: ListaHeroesComponent },
  { path: 'buscar/:termino', component: ListaHeroesComponent },
  { path: 'detalle-heroe/:id', component: DetalleHeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista-heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
