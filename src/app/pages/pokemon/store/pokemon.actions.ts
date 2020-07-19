import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Pokemon } from './pokemon.model';

export const loadPokemons = createAction(
  '[Pokemon/API] Load Pokemons',
);
export const loadPokemonsSuccess = createAction(
  '[Pokemon/API] Load Pokemons Success',
  props<{ pokemons: Pokemon[] }>()
);
export const loadPokemonsFailure = createAction(
  '[Pokemon/API] Load Pokemons Failure',
  props<{ err: any }>()
)
export const loadPokemon = createAction(
  '[Pokemon/API] Load Pokemon',
  props<{ findByName:string }>()
);
export const loadPokemonSuccess = createAction(
  '[Pokemon/API] Load Pokemon Success',
  props<{ pokemon: Pokemon}>()
);
export const loadPokemonFailure = createAction(
  '[Pokemon/API] Load Pokemon Failure',
  props<{ err: any }>()
)
export const loadPokemonNextEvolution = createAction(
  '[Pokemon/API] Load Pokemon Next Evolution',
  props<{ findByName:string }>()
);
export const loadPokemonNextEvolutionSuccess = createAction(
  '[Pokemon/API] Load Pokemon Next Evolution Success',
  props<{ nextEvolution: []}>()
);
export const loadPokemonNextEvolutionFailure = createAction(
  '[Pokemon/API] Load Pokemon Next Evolution Failure',
  props<{ err: any }>()
)
export const loadPokemonsByWeakness = createAction(
  '[Pokemon/API] Load Pokemon By Weakness',
  props<{ findByWeakness:string }>()
);
export const loadPokemonsByWeaknessSuccess = createAction(
  '[Pokemon/API] Load Pokemon By Weakness Success',
  props<{ pokemons: Pokemon[]}>()
);
export const loadPokemonsByWeaknessFailure = createAction(
  '[Pokemon/API] Load Pokemon By Weakness Failure',
  props<{ err: any }>()
)
