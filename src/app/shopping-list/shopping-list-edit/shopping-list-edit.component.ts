import { Component, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping-list-edit.component.html',
    styleUrls: ['shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
    // @Output() ingredientCreated = new EventEmitter<Ingredient>()
    constructor(private shoppingListService: ShoppingListService){
    }
    ngOnInit(){
    }
    onIngredientCreated(nameEl: HTMLInputElement, amountEl: HTMLInputElement){
        var x = "2";
        // get the HTML type to declare
        console.log('add to service' + {name: nameEl.value, amount: parseInt(amountEl.value)});
        // emit the ingredient
        // this.ingredientCreated.emit({name: nameEl.value, amount: parseInt(amountEl.value)});
        this.shoppingListService.addIngredient({name: nameEl.value, amount: parseInt(amountEl.value)});
        console.log(this.shoppingListService.getIngredients());
    }
}