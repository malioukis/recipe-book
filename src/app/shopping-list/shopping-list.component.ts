import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  // store subscription an then clean it
  private igChangeSub: Subscription;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getIngredients();
    this.igChangeSub = this.shopingListService.IngredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
