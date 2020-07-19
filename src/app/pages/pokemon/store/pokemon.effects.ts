import { Injectable } from '@angular/core';
import { Actions, createEffect ,ofType} from '@ngrx/effects';
import * as PokemonActions from './pokemon.actions'
import { PokemonService } from '../services/pokemon.service'
import { exhaustMap, tap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      exhaustMap(()=>
      this.pokemonService.getPokemons().pipe(
        tap(console.log),
        map((pokemons:any)=>{
          console.log(pokemons)
          return PokemonActions.loadPokemonsSuccess({pokemons})
        }),
        catchError(err=>of(PokemonActions.loadPokemonFailure({err})))
      )),
    )
  })
  loadPokemonByWeakness$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemonsByWeakness),
      exhaustMap((action)=>
      this.pokemonService.getPokemonByWeakness(action.findByWeakness).pipe(
        tap(console.log),
        map((payload:any)=>{
          console.log(payload)
          return PokemonActions.loadPokemonsByWeaknessSuccess({pokemons:payload})
        }),
        catchError(err=>of(PokemonActions.loadPokemonFailure({err})))
      )),
      tap(()=>this.router.navigateByUrl('/pokemon/pokemonWeakness'))
    )
  })
  loadPokemon$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      exhaustMap((action)=>
      this.pokemonService.getPokemonByName(action.findByName).pipe(
        tap(console.log),
        map((payload:any)=>{
          console.log(payload)
          return PokemonActions.loadPokemonSuccess({pokemon:payload[0]})
        }),
        catchError(err=>of(PokemonActions.loadPokemonFailure({err})))
      )),
      tap(()=>this.router.navigateByUrl('/pokemon/showPokemon'))
    )
  })
  getPokemonNextEvolution$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemonNextEvolution),
      exhaustMap((action)=>
      this.pokemonService.getPokemonByName(action.findByName).pipe(
        tap(console.log),
        map((payload:any)=>{
          console.log(payload)
          return PokemonActions.loadPokemonNextEvolutionSuccess({nextEvolution:payload[0].next_evolution})
        }),
        catchError(err=>of(PokemonActions.loadPokemonFailure({err})))
      )),
      tap(()=>this.router.navigateByUrl('/pokemon/nextEvolution'))
    )
  })


  constructor(
    private actions$: Actions,
    private pokemonService:PokemonService,
    private router:Router,
    ) {}

}
