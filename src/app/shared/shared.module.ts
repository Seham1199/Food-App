import { TrimDatePipe } from './pipes/trimDate.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './profile/profile.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoDataComponent } from './no-data/no-data.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { TrimEmailPipe } from './pipes/trimEmail.pipe';
import { ConfirmProfileComponent } from './profile/components/confirm-profile/confirm-profile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DeleteComponent,
    ProfileComponent,
    NotFoundComponent,
    NoDataComponent ,
    TrimPipe,
    TrimEmailPipe,
    TrimDatePipe,
    LogoutComponent,
    ChangePassComponent,
    ConfirmProfileComponent
  ],
  imports: [
    CommonModule ,
    NgxDropzoneModule,
    RouterModule , 
    MatMenuModule ,
    MatIconModule ,
    MatButtonModule ,MatDialogModule,MatInputModule,MatFormFieldModule,FormsModule,MatPaginatorModule
    ,MatSelectModule,ReactiveFormsModule,MatButtonToggleModule,MatChipsModule
  ],
  exports:[
    NgxDropzoneModule ,
    SidebarComponent  ,
    NavbarComponent ,
    HomeComponent,
    NoDataComponent,
    TrimPipe,
    TrimEmailPipe,
    TrimDatePipe,
    MatMenuModule,
    MatIconModule ,
    MatButtonModule ,MatDialogModule,MatInputModule,MatFormFieldModule,FormsModule,MatPaginatorModule,
    MatSelectModule,ReactiveFormsModule,MatButtonToggleModule,MatChipsModule
  ],
})
export class SharedModule { }
