import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component'
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NextEvolutionComponent } from './next-evolution/next-evolution.component';
import { PokemonShowComponent } from './pokemon-show/pokemon-show.component';
import { WeaknessPokemonComponent } from './weakness-pokemon/weakness-pokemon.component';

const routes: Routes = [
  {
    path:"",component:PokemonComponent,
  },
  {
    path:"allPokemons",component:PokemonListComponent
  },
  {
    path:"nextEvolution",component:NextEvolutionComponent
  },
  {
    path:"showPokemon",component:PokemonShowComponent
  },
  {
    path:"pokemonWeakness",component:WeaknessPokemonComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
