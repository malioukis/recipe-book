import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    // calling constructor
    new Recipe('Test Recipe1', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe2', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe3', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe4', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU=')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // slice returns new copy array
  }

}
