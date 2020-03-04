import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // calling constructor
    new Recipe('Test Recipe1', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe2', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe3', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU='),
    new Recipe('Test Recipe4', 'test desc', 'https://media.gettyimages.com/photos/herbs-picture-id637769910?b=1&k=6&m=637769910&s=612x612&w=0&h=dV9qigGyhtsmhPEa2y7zjjzRNiZhfOi_TN2XotMMwMU=')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
