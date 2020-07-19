import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:"pokemon",
    loadChildren:()=>import('./pages/pokemon/pokemon.module')
                            .then(module => module.PokemonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
