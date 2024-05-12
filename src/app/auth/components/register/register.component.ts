import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errMessage:string = '' ;
  errVerify:string = '' ;
  imgSrc:any;
  isHide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;
  resData:any;

  constructor(private _AuthService:AuthService ,private  _Router:Router, private _ToastrService:ToastrService){}

ngOnInit(): void {
}


  registerForm:FormGroup = new FormGroup({
    userName: new FormControl('' , [Validators.required , Validators.pattern(/^[A-z]{4,16}[0-9]{1,4}$/)]),
    email: new FormControl('', [Validators.required , Validators.email]),
    country: new FormControl('' , [Validators.minLength(4)] ),
    phoneNumber: new FormControl('' , [Validators.required ,  Validators.pattern(/^01[0125][0-9]{8}$/)] ),
    profileImage: new FormControl('' ),
    password: new FormControl('', [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)] ),
    confirmPassword: new FormControl('' , [ Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)] ),
  })


// in app.component.ts
files: File[] = [];

onSelect(event:any) {
 // console.log(event);
  this.files.push(...event.addedFiles);
// console.log(this.files);
  this.imgSrc = this.files[0];
}

onRemove(event:any) {
 // console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


onRegister(data:FormGroup):void{

 let myData = new FormData();
myData.append('userName' , data.value.userName);
myData.append('email' , data.value.email);
myData.append('country' , data.value.country);
myData.append('phoneNumber' , data.value.phoneNumber);
myData.append('password' , data.value.password);
myData.append('confirmPassword' , data.value.confirmPassword);
myData.append('profileImage' , this.imgSrc);
// console.log(myData)


   this._AuthService.register(myData).subscribe({
      next:(res)=>{
       // console.log(res)
       this.resData = res;
      },
      error:(err)=>{
        // console.log(err);
        this.errMessage = err.error.message ;
        this._ToastrService.error( err.error.message , 'Notify That')
      },
      complete:()=>{
        this.isHide = false;
       this._ToastrService.success('regisrered successfully check your mail', 'verify now');
      }
    })
  }
  

 // Verify Form
 verifyForm:FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required , Validators.email] ),
  code:new FormControl('')
})

onVerify(data:FormGroup):void{
   
   this._AuthService.verify(data.value).subscribe({
       next:(response)=>{
          console.log(response)
       },
       error:(err)=>{
          console.log(err);
         this.errVerify = err.error.message ;
         this._ToastrService.error( err.error.message , 'Notify That')
       },
    complete:()=>{
      this._ToastrService.success( 'you registered successfully','done')  
      this._Router.navigate(['/auth'])
    }
     })


  }



}