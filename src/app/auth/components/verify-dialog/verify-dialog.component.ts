import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-dialog',
  templateUrl: './verify-dialog.component.html',
  styleUrls: ['./verify-dialog.component.scss']
})
export class VerifyDialogComponent {
 errVerify:string = '';
  isHide:boolean = true ;
  constructor(private _AuthService:AuthService , private _Router:Router){}


 





}
