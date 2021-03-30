import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';

const routes: Routes = [
  { path: 'lista-heroes', component: ListaHeroesComponent },
  { path: 'lista-heroes', component: ListaHeroesComponent },
  { path: 'lista-heroes', component: ListaHeroesComponent },
  { path: 'detalle-heroe/:id', component: DetalleHeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
