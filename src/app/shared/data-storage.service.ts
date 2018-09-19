import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.model';
import * as RecipesActions from '../recipes/store/recipes.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  private recipes: Recipe[];

  constructor(private httpClient: HttpClient,
              private store: Store<AppState>) {
    this.store.select('recipes').subscribe(data => {
      this.recipes = data.recipes;
    });
  }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://learning-angular-http-client.firebaseio.com/recipes.json', this.recipes, {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://learning-angular-http-client.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map((recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe(
        (recipes: Recipe[]) => {
          this.store.dispatch(new RecipesActions.AddRecipes(recipes));
        }
      );
  }
}
