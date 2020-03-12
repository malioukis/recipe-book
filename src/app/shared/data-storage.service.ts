import { Ingredient } from './ingredient.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // firebase uses put to overwrite all data, it varies depending on the endpoint, could use POST
    this.http.
      put(
        'https://recipe-book-194ad.firebaseio.com/recipes.json',
        recipes
      ).subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.
      get<Recipe[]>('https://recipe-book-194ad.firebaseio.com/recipes.json')
      .pipe(map(recipes => { // transform data in an observable chain before subscribing
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }; // spread operator to copy existing data
        }); // js default array map transform
      }))
      .subscribe(recipes => {
        // console.log(`GET: ${recipes}`);
        this.recipeService.setRecipes(recipes);
      });
  }

}
