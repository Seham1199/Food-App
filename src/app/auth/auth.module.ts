import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyDialogComponent } from './components/verify-dialog/verify-dialog.component';

@NgModule({
  declarations: [
    AuthComponent,
RegisterComponent,
ForgetpasswordComponent,
ResetPasswordComponent,
VerifyDialogComponent 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
