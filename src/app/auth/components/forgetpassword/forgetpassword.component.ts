import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  errMessage:string = '' ;

  constructor(private _AuthService:AuthService , private _Router:Router,private _ToastrService:ToastrService){}

ngOnInit(): void {
}

  forgetPassForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email] ),
  })


  
onForgetPass(data:FormGroup):void{

  if (this.forgetPassForm.valid) {
    this._AuthService.forgetPass(data.value).subscribe({
      next:(res)=>{
      // console.log(res.message)
      },
      error:(err)=>{
          console.log(err);
        this.errMessage = err.error.message ;
        this._ToastrService.error(this.errMessage , 'Notify That')
      },
       complete:()=>{
       this._ToastrService.success('Youer request is being processed, please check your email' , 'Done')
        this._Router.navigate(['auth/resetPass'])
      }
    })
  }
  }
  




}
