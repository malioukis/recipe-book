import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    // calling constructor
    new Recipe(
      'My Recipe no1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'http://lorempixel.com/640/480/food',
      [
        new Ingredient('May', 12),
        new Ingredient('Item', 34),
        new Ingredient('My', 55)
      ]
    ),
    new Recipe(
      'My Recipe no2',
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
      'http://lorempixel.com/640/480/food',
      [
        new Ingredient('envisioneer', 12),
        new Ingredient('TCP', 34),
        new Ingredient('ccount', 55),
        new Ingredient('Snap.', 12),
        new Ingredient('Bagpipes.', 34),
        new Ingredient('Mouse', 55)
      ]
    ),
    new Recipe(
      'My Recipe no3',
      'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.',
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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    console.log(this.recipes);
    return this.recipes.slice(); // slice returns new copy array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
