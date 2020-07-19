import { Component, OnInit } from '@angular/core';
import * as fromPokemon from '../store/pokemon.reducer'
import * as PokemonSelectors from '../store/pokemon.selectors'
import { Store,select }  from '@ngrx/store'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-evolution',
  templateUrl: './next-evolution.component.html',
  styleUrls: ['./next-evolution.component.scss']
})
export class NextEvolutionComponent implements OnInit {

  constructor(private store$:Store<fromPokemon.State>) {
    this.nextEvolution$ = this.store$.pipe(select(PokemonSelectors.selectNextEvolutionPokemon))
  }
  nextEvolution$:Observable<any>
  ngOnInit(): void {

  }

}
