import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor( public dialogRef: MatDialogRef<LogoutComponent>,
    private _Router:Router 
     ) {}

  
  onClose(){
   this.dialogRef.close();
   
  }
  logOut(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('email');
    localStorage.removeItem('loglevel')
    this._Router.navigate(['/auth'])
  }
}
