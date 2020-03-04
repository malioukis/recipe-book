import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Ingredient1DEFAULT', 2),

  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());

  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);  //spread operator turn an aray of elements to list of elements
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
