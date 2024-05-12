import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent {
  errMessage:string = '' ;
  hide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;
  hide3:boolean = true;
  form:any;
  constructor(public dialogRef: MatDialogRef<ChangePassComponent>,private _AuthService:AuthService
    , private _ToastrService:ToastrService
  ) { }

  ngOnInit() {
  }
  resetForm:FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    newPassword: new FormControl('' , [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)  ]),
    confirmNewPassword: new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  })

onChangePass(data:FormGroup):void{
  if (this.resetForm.valid) {
    this._AuthService.changePassword(data.value).subscribe({
      next:(res)=>{
        //console.log(res)
      },
      error:(err)=>{
         console.log(err.error.message);
      //  this.errMessage = err.error.message ;
      this._ToastrService.error(err.error.message , 'Notify That')
      },
      complete:()=>{
        this._ToastrService.success('Password has been updated successfully', 'Done')
      //console.log('sucess')
      }
    })
  }
}
onNoClick(): void {
  this.dialogRef.close();
}
}
