import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
 { path: 'user-recipes', loadChildren: () => import('./user-recipes/user-recipes.module').then(m => m.UserRecipesModule) }, 
 { path: 'favourites', loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
