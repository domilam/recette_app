import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx'; 

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipeService){}

    storeRecipes(){
        return this.http.put('https://angular-recipe-51318.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
    // getRecipes() {
    //     this.http.get('https://angular-recipe-51318.firebaseio.com/recipes.json')
    //       .map(
    //         (response: Response) => {
    //           const recipes: Recipe[] = response.json();
    //           for (let recipe of recipes) {
    //             if (!recipe['ingredients']) {
    //               recipe['ingredients'] = [];
    //             }
    //           }
    //           return recipes;
    //         }
    //       )
    //       .subscribe(
    //         (recipes: Recipe[]) => {
    //           this.recipeService.setRecipes(recipes);
    //         }
    //       );
    //   }
    
    readRecipes(){
        this.http.get('https://angular-recipe-51318.firebaseio.com/recipes.json')
            .map(
                (response: Response)=>{
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes)=>{
                    console.log(recipes);
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}