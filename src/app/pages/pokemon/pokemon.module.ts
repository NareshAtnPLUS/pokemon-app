import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './store/pokemon.effects'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/theme/material.module';
import { PokemonService } from './services/pokemon.service';
import { StoreModule } from '@ngrx/store'
import * as fromPokemon from './store/pokemon.reducer'
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonShowComponent } from './pokemon-show/pokemon-show.component';
import { NextEvolutionComponent } from './next-evolution/next-evolution.component';
import { WeaknessPokemonComponent } from './weakness-pokemon/weakness-pokemon.component'
@NgModule({
  declarations: [PokemonComponent,PokemonListComponent, PokemonShowComponent, NextEvolutionComponent, WeaknessPokemonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forFeature(fromPokemon.pokemonsFeatureKey,fromPokemon.reducer),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  providers:[PokemonService]
})
export class PokemonsModule { }
