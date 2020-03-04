import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    // cross component communication
    this.recipeService.recipeSelected
      // get informed about changes
      .subscribe(
        // event emmiter in service, emits a recipe
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
