import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../store/pokemon.model';
import { Store,select } from '@ngrx/store'
import * as fromPokemon from '../store/pokemon.reducer';
import * as PokemonActions from '../store/pokemon.actions';
import * as PokemonSelectos from '../store/pokemon.selectors';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private store$:Store<fromPokemon.State>,
  ) { }
  pokemons$:Observable<Pokemon[]>

  async ngOnInit() {
    await this.store$.dispatch(PokemonActions.loadPokemons())
    this.pokemons$ = await this.store$.pipe(select(PokemonSelectos.selectPokemons))
  }

}
