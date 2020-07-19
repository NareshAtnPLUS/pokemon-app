import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../store/pokemon.model';
import { Observable,of } from 'rxjs';
import { Store,select } from '@ngrx/store'
import * as fromPokemon from '../store/pokemon.reducer';
import * as PokemonSelectors from '../store/pokemon.selectors'
import { filter, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private PokemonUrl = "http://localhost:3000/pokemon";
  constructor(
    private http:HttpClient,
    private store$:Store<fromPokemon.State>
  ) { }
  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.PokemonUrl}`)
  }
  getPokemonByName(name){
    const params = new HttpParams().set('name',name)
    return this.http.get<Pokemon>(`${this.PokemonUrl}`,{params});
  }

  getPokemonByWeakness(weakness){
    let pokemonByWeakness=[]
    return this.store$.pipe(
      select(PokemonSelectors.selectPokemons),
      map(pokemons=>pokemons.filter(pokemon=>pokemon.weaknesses.some(weak=>weak === weakness)))
      )
  }
}
