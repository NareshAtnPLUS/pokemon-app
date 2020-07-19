import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store'
import * as fromPokemon from './store/pokemon.reducer';
import * as PokemonActions from './store/pokemon.actions';
import * as PokemonSelectos from './store/pokemon.selectors';
import { Pokemon } from './store/pokemon.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  nameForm=this.fb.group({
    findByName:['',Validators.required],
  })
  weaknessForm=this.fb.group({
    findByWeakness:['',Validators.required],
  })

  constructor(
    private store$:Store<fromPokemon.State>,
    private fb:FormBuilder,
  ) { }
  pokemons$:Observable<Pokemon[]>
  async ngOnInit() {
    await this.store$.dispatch(PokemonActions.loadPokemons())
    this.pokemons$ = await this.store$.pipe(select(PokemonSelectos.selectPokemons))
  }
  onWeaknessSubmit(){
      const weakness = this.weaknessForm.value
      console.log(weakness)
      this.store$.dispatch(PokemonActions.loadPokemonsByWeakness(weakness))
  }
  onNameSubimt(){
    const name = this.nameForm.value
    console.log(name)
    this.store$.dispatch(PokemonActions.loadPokemon(name))
  }
  onEvolutionSubmit(){
    const name = this.nameForm.value
    console.log(this.nameForm.value)
    this.store$.dispatch(PokemonActions.loadPokemonNextEvolution(name))
  }

}
