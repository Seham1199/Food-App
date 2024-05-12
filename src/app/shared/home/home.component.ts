import { Component } from '@angular/core';
import { IMenu } from 'src/app/auth/models/auth';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName:string | any = '';
  
  constructor(private _AuthService:AuthService){
    this.takeUserName()
  }
  
takeUserName():void {
  this.userName = this._AuthService.userName;
 // console.log(this.userName)
}




}
