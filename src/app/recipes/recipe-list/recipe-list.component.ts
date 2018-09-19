import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs';
import {Recipes} from '../store/recipes.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipes>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.recipes = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
