import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  // onIngredientRecepted(ingredientRecepted){
  //   this.ingredients.push(ingredientRecepted);
  //   console.log(this.ingredients);
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.sendIngredient
    .subscribe((ingredients)=>{
      this.ingredients = ingredients;
    });
  }
  onClickIngredient(index: number){
    this.shoppingListService.ingredientEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
