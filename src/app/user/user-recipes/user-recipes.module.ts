import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';
import { UserRecipesComponent } from './user-recipes.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    UserRecipesComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    UserRecipesRoutingModule , 
    SharedModule
  ]
})
export class UserRecipesModule { }
