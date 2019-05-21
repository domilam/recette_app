import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  i: number = 0;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[])=>{
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }
  /* addRecipeClick(){
    this.i++;
    console.log(this.i);
  } */
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
