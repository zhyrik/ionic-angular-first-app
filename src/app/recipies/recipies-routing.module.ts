import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesPage } from './recipies.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  },
  {
    path: ':recipeId',
    loadChildren: () => import('./recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesPageRoutingModule {}
