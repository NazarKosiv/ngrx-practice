import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient) {}

  storeRecipes(recipes: Recipe[]) {
    const req = new HttpRequest('PUT', 'https://learning-angular-http-client.firebaseio.com/recipes.json', recipes, {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://learning-angular-http-client.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    });
  }
}
