import { Component, OnInit } from '@angular/core';
import * as fromPokemon from '../store/pokemon.reducer'
import * as PokemonSelectors from '../store/pokemon.selectors'
import { Store,select }  from '@ngrx/store'
import { Observable } from 'rxjs';
import { Pokemon } from '../store/pokemon.model';
@Component({
  selector: 'app-weakness-pokemon',
  templateUrl: './weakness-pokemon.component.html',
  styleUrls: ['./weakness-pokemon.component.scss']
})
export class WeaknessPokemonComponent implements OnInit {

  constructor(private store$:Store<fromPokemon.State>) {
    this.pokemons$ = this.store$.pipe(select(PokemonSelectors.selectWeaknessPokemon))
   }
  pokemons$:Observable<Pokemon[]>
  ngOnInit(): void {

  }

}
