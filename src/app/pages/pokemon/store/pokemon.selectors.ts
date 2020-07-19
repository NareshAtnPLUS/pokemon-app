import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from './pokemon.reducer'
export const selectPokemonFeatureState = createFeatureSelector<fromPokemon.State>(
  fromPokemon.pokemonsFeatureKey
)
export const selectPokemons = createSelector(
  selectPokemonFeatureState,
  fromPokemon.adapter.getSelectors().selectAll
)
export const selectPokemonLoading = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State) => state.loading
)
export const selectPokemonLoaded = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State) => state.loaded
)
export const selectPokemonError = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State) => state.error
)
export const selectCurrentPokemonId = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State) => state.selectedPokemonId
)
export const selectWeaknessPokemon = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State)=> state.filteredPokemon
)
export const selectNextEvolutionPokemon = createSelector(
  selectPokemonFeatureState,
  (state:fromPokemon.State)=> state.nextEvolution
)
export const selectCurrentPokemon = createSelector(
  selectPokemonFeatureState,
  selectCurrentPokemonId,
  (state:fromPokemon.State) => state.entities[state.selectedPokemonId]
)
