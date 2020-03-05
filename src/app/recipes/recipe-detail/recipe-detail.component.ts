import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          // fetch id and store it
          this.id = +params[`id`];
          // fetch the new recipe
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
    console.log(this.id);
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }


}
