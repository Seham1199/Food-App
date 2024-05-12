import { NotFoundComponent } from './shared/not-found/not-found.component';
import { authGuard } from './core/Guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo: 'auth' , pathMatch: 'full'},
  
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard',canActivate:[authGuard] ,loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
   {path: '**' , component: NotFoundComponent , title: '404!'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
