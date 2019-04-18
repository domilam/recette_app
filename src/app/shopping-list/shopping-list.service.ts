import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    private ingredients: Ingredient[] = [];
    sendIngredient= new Subject<Ingredient[]>();

    addIngredient(ingredientRecepted: Ingredient){
        this.ingredients.push(ingredientRecepted);
        this.sendIngredient.next(this.getIngredients());
        console.log(this.ingredients);
    }
    getIngredients(){
        return this.ingredients.slice();
    }
    addToShoppingList(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.sendIngredient.next(this.getIngredients());
    }
}