
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
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
}