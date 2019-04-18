import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeInitComponent } from './recipes/recipe-init/recipe-init.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recettes' , pathMatch: 'full'},
    {path: 'recettes', component: RecipesComponent, children: [
      {path: '', component: RecipeInitComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':index', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'listeDesCourses', component: ShoppingListComponent},
    {path: 'pageNotFound', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/pageNotFound'}
  ]

@NgModule({
// imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutesModule{

}