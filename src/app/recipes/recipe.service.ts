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
      'Test Recipe1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU=',
      [
        new Ingredient('Ingredient1', 12),
        new Ingredient('Ingredient2', 34),
        new Ingredient('Ingredient3', 55)
      ]
    ),
    new Recipe(
      'Test2',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg',
      [
        new Ingredient('Ingredient1', 12),
        new Ingredient('Ingredient2', 34),
        new Ingredient('Ingredient3', 55),
        new Ingredient('Ingredient1', 12),
        new Ingredient('Ingredient2', 34),
        new Ingredient('Ingredient3', 55)
      ]
    )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // slice returns new copy array
  }

}
