import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  errMessage:string = '' ;
  hide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;

  constructor(private _AuthService:AuthService , private _Router:Router , private _ToastrService:ToastrService){}

ngOnInit(): void {
}

  resetForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email] ),
    password: new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)] ),
    confirmPassword: new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)] ),
    seed: new FormControl('' , [Validators.required ] ),
  })


  
onResetPass(data:FormGroup):void{

  if (this.resetForm.valid) {
    this._AuthService.resetPass(data.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        // console.log(err);
        this.errMessage = err.error.message ;
        this._ToastrService.error(this.errMessage , 'Notify That')
      },
      complete:()=>{
       this._Router.navigate(['/auth'])
       this._ToastrService.success('Welcome Back' , 'Done!')
      }
    })
  }
  }
  


}
