import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from './models/auth';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  errMessage:string = '' ;
  hide:boolean = true;
  role:string | any = '';

  constructor(private _AuthService:AuthService , private _Router:Router , private _ToastrService:ToastrService){
    if (localStorage.getItem('userToken')) {
       this.getrole();
     
    }
  }

ngOnInit(): void {
}

getrole():void{
 this.role = this._AuthService.role;
 console.log(this.role)
}


  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email] ),
    password: new FormControl('' , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)] ),
  })


  
onLogin(data:FormGroup):void{

  if (this.loginForm.valid) {
    this._AuthService.login(data.value).subscribe({
      next:(res)=>{
      //  console.log(res)
        localStorage.setItem('userToken' , res.token);
       this.role =  this._AuthService.getProfile();
     this.role = this.getrole()
      },
      error:(err)=>{
        // console.log(err);
        this.errMessage = err.error.message ;
        this._ToastrService.error( err.error.message , 'Notify That')
      },
      complete:()=>{
        this._ToastrService.success( 'Welcome Back'  , 'Loged in Successfully' ) 
        this._Router.navigate(['/dashboard'])
      }
    })
  }
  }
  


  }

