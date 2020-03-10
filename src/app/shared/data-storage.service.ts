import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    // firebase uses put to overwrite all data, it varies depending on the endpoint, could use POST
    return this.http.
      put(
        'https://recipe-book-194ad.firebaseio.com/recipes.json',
        recipes
      ).subscribe(response => {
        console.log(response);
      });
  }

}
