import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  index: number;

  constructor(private sLService: ShoppingListService,
              private recipeService: RecipeService,
              private currentRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    // this.index = +this.currentRoute.snapshot.params['index'];
    this.currentRoute.params
      .subscribe(
        (params: Params)=>{
          this.index = +params['index'];
          this.recipeDetail = this.recipeService.getRecipeByIndex(this.index);
        }
      )
  }

  addToSL(ingredients: Ingredient[]){
    ingredients.forEach((ingredient) => {
      this.sLService.addToShoppingList(ingredient);
    });
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['recettes']);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
