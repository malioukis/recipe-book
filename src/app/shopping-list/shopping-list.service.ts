import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Ingredient1', 2),
    new Ingredient('Ingredient2', 34),
    new Ingredient('Ingredient3', 45),
    new Ingredient('Ingredient4', 34)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }
}
