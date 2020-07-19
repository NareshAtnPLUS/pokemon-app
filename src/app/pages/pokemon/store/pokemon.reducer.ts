import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pokemon } from './pokemon.model';
import * as PokemonActions from './pokemon.actions';
import * as fromRoot from '../../../state/app-state'
export const pokemonsFeatureKey = 'pokemons';

export interface State extends EntityState<Pokemon> {
  // additional entities state properties
  selectedPokemonId:number|null,
  filteredPokemon:[],
  nextEvolution:[]
  loading:boolean,
  loaded:boolean,
  error:string
}
export interface PokemonState extends fromRoot.AppState{
  pokemons:State
}
export const adapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  ids:[],
  entities:{},
  selectedPokemonId:null,
  filteredPokemon:[],
  nextEvolution:[],
  loaded:false,
  loading:false,
  error:""
});


export const reducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonsSuccess,
    (state,action)=>{
      console.log(action)
      return adapter.setAll(action.pokemons, state)
    }),
    on(PokemonActions.loadPokemonSuccess,
      (state,action)=>{
        console.log(action)
        return adapter.addOne(action.pokemon, {...state,selectedPokemonId:action.pokemon.id})
      }),
    on(PokemonActions.loadPokemonsByWeaknessSuccess,(state,action)=>{
      return {...state,filteredPokemon:action.pokemons}
    }),
    on(PokemonActions.loadPokemonNextEvolutionSuccess,
      (state,action)=>({
        ...state,nextEvolution:action.nextEvolution
      }))



);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
