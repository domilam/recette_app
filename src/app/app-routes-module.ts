import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent , pathMatch: 'full'},
    {path: 'recettes', loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'listeDesCourses', component: ShoppingListComponent},
    {path: 'pageNotFound', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/pageNotFound'}
    
]

@NgModule({
// imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
exports: [RouterModule]
})
export class AppRoutesModule{

}