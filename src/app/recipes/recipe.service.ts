
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Ribs salade', 'Cette recette est très simple',
         'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
         [
             new Ingredient('Ribs de porc', 3),
             new Ingredient('tomate', 1),
             new Ingredient('laitue', 1),
         ]),
        new Recipe('Crevettes Quinoa', 'Recette plus élaborée',
         'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg',
         [
            new Ingredient('Crevettes', 10),
            new Ingredient('Quinoa', 50),
         ])];

    // selectItemEvent = new EventEmitter<Recipe>();
    getRecipes(){
        return this.recipes.slice();
    }
    
    getRecipeByIndex(index){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }
}