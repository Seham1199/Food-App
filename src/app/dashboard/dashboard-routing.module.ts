import { HomeComponent } from './../shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/Guards/admin.guard';
import { userGuard } from '../core/Guards/user.guard';
import { ProfileComponent } from '../shared/profile/profile.component';

const routes: Routes = [{ path: '', component: DashboardComponent , children:[
  {path: ''  , redirectTo: 'home' , pathMatch: 'full'} ,
  {path:'home' , component:HomeComponent , title:'Home'} ,
  {path:'profile' , component:ProfileComponent , title:'Profile'} ,
  { path: 'admin', canActivate:[adminGuard],loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule), title:'Admin' },
  { path: 'user',canActivate:[userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule) , title: 'User'},
]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
