import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {RecipesFeatureState} from './recipes.model';
import * as RecipesActions from './recipes.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {DataStorageService} from '../../shared/data-storage.service';
import {Recipe} from '../recipe.model';

@Injectable()
export class RecipesEffects {
  @Effect()
  fetchRecipes = this.actions$
    .ofType(RecipesActions.FETCH_RECIPES)
    .pipe(
      switchMap(() => {
        return this.dataStorageService.getRecipes();
      }),
      map((recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }),
      map((recipes: Recipe[]) => ({
        type: RecipesActions.ADD_RECIPES,
        payload: recipes
      }))
    );

  @Effect({dispatch: false})
  storeRecipes = this.actions$
    .ofType(RecipesActions.STORE_RECIPES)
    .pipe(
      withLatestFrom(this.store.select('recipes')),
      switchMap(([action, state]) => {
        return this.dataStorageService.storeRecipes(state.recipes);
      })
    );

  constructor(private actions$: Actions, private store: Store<RecipesFeatureState>, private dataStorageService: DataStorageService) {}
}
