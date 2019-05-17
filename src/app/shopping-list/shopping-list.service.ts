import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    private ingredients: Ingredient[] = [];
    sendIngredient= new Subject<Ingredient[]>();
    ingredientEditing = new Subject<number>();
    ingredientIndex: number;

    addIngredient(ingredientRecepted: Ingredient){
        this.ingredients.push(ingredientRecepted);
        this.sendIngredient.next(this.getIngredients());
        console.log(this.ingredients);
    }
    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index){
        this.ingredientIndex = index;
        return this.ingredients[index];
    }
    addToShoppingList(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.sendIngredient.next(this.getIngredients());
    }
    updateShoppingList(ingredient: Ingredient){
        this.ingredients[this.ingredientIndex] = ingredient;
        this.sendIngredient.next(this.getIngredients());
    }
    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.sendIngredient.next(this.getIngredients());
    }
    clearIngredients(){
        this.ingredients = [];
        this.sendIngredient.next(this.getIngredients());
    }
}