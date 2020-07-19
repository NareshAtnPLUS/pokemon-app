import { Component, OnInit } from '@angular/core';
import * as fromPokemon from '../store/pokemon.reducer'
import * as PokemonSelectors from '../store/pokemon.selectors'
import { Store,select }  from '@ngrx/store'
import { Pokemon } from '../store/pokemon.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.scss']
})
export class PokemonShowComponent implements OnInit {

  constructor(private store$:Store<fromPokemon.State>) {
    this.pokemon$ = this.store$.pipe(select(PokemonSelectors.selectCurrentPokemon))
    this.pokemon$.subscribe(s=>this.pokemon = s)
  }
  pokemon$:Observable<Pokemon>
  pokemon:Pokemon;
  async ngOnInit() {

    console.log(this.pokemon)
  }

}
