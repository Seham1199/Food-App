import { VerifyDialogComponent } from './components/verify-dialog/verify-dialog.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyDialogComponent },
  { path: 'forgetPass', component: ForgetpasswordComponent },
  { path: 'resetPass', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
