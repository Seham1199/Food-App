import { AuthService } from 'src/app/auth/services/auth.service';
import { IMenu } from './../../auth/models/auth';
import { Component, EventEmitter, Output } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
 isOpened:boolean = true;

  constructor(private _AuthService:AuthService , public dialog: MatDialog){}

isAdmin(): boolean {
  return this._AuthService.role == 'SuperAdmin' ? true : false;
}
isUser(): boolean {
  return this._AuthService.role == 'SystemUser' ? true : false;
}


menu: IMenu[] = [
  {
    text: 'Home',
    icon: 'fa-house',
    link: '/dashboard/home',
    isActive: this.isAdmin() || this.isUser(),
  },
  {
    text: 'Users',
    icon: 'fa-users',
    link: '/dashboard/admin/users',
    isActive: this.isAdmin(),
  },
  {
    text: 'Recipes',
    icon: 'fa-bowl-rice',
    link: '/dashboard/admin/recipes',
    isActive: this.isAdmin(),
  },
  {
    text: 'Categories',
    icon: 'fa-calendar-days',
    link: '/dashboard/admin/categories',
    isActive: this.isAdmin(),
  },
  {
    text: 'User Recipes',
    icon: 'fa-bowl-rice',
    link: '/dashboard/user/user-recipes',
    isActive: this.isUser(),
  },
  {
    text: 'Favourites',
    icon: 'fa-heart',
    link: '/dashboard/user/favourites',
    isActive: this.isUser(),
  },
];



openLogoutDialog(): void{
  const dialogRef = this.dialog.open(LogoutComponent, {
    data: {},
   
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      
    }
  });
  
}

onClicked() {
  this.isOpened = !this.isOpened;
  this.isOpenedValue.emit(this.isOpened);
  console.log(this.isOpened)
}


}
