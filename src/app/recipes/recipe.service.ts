import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // calling constructor
    new Recipe(
      'MyRecipe1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'http://lorempixel.com/640/480/food',
      [
        new Ingredient('May', 12),
        new Ingredient('Item', 34),
        new Ingredient('My', 55)
      ]
    ),
    new Recipe(
      'MyRecipe2',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'http://lorempixel.com/640/480/food',
      [
        new Ingredient('envisioneer', 12),
        new Ingredient('TCP', 34),
        new Ingredient('ccount', 55),
        new Ingredient('Snap.', 12),
        new Ingredient('Bagpipes.', 34),
        new Ingredient('Mouse', 55)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // slice returns new copy array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
