import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping-list-edit.component.html',
    styleUrls: ['shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{
    subscription: Subscription;
    editMode = false;
    editedIngredientIndex: number;
    editedIngredient: Ingredient;
    @ViewChild('f') ingredientForm: NgForm;

    constructor(private shoppingListService: ShoppingListService){
    }
    ngOnInit(){
        this.subscription = this.shoppingListService.ingredientEditing
        .subscribe(
            (index: number) =>{
                this.editMode = true;
                this.editedIngredientIndex = index;
                this.editedIngredient = this.shoppingListService.getIngredient(index);
                this.ingredientForm.form.patchValue({
                    name: this.editedIngredient.name,
                    amount: this.editedIngredient.amount
                });
                
            }
        )
    }
    onIngredientCreatedEdited(form: NgForm){
        const value = form.value;
        if (!this.editMode){
            this.shoppingListService.addIngredient({name: value.name, amount: parseInt(value.amount)});
        }else{
            this.shoppingListService.updateShoppingList({name: value.name, amount: parseInt(value.amount)});
        }
        form.reset();
        this.editMode = false;
    }

    onDelete(){
        if (this.editMode){
            this.shoppingListService.deleteIngredient(this.shoppingListService.ingredientIndex);
        }
        this.onClear();

    }
    onClear(){
        this.ingredientForm.reset();
        this.editMode = false;
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}