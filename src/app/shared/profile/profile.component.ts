import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsers } from './../../admin/users/models/users';
import { ProfileService } from './services/profile.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isHide:boolean = true;
  user:IUsers | any ;
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  imgSrc:any;
  message:string = '"Welcome Back"';
  isUpdatedPage:boolean = true ;
  hide:boolean = true;
  myData:any;
  updateForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.pattern(''),]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),]),
    country: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.minLength(11),Validators.pattern('^01[0-2]d{1,8}$'),]),
    profileImage: new FormControl(''),
    confirmPassword: new FormControl('', [
      Validators.required,
       Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$')]),
  });

  constructor(
    private _ProfileService:ProfileService , private _Router:Router , 
    private _ToastrService:ToastrService , ) {
      this.getCurrentUser();
    // this.editFromApi(this.user)
     
    }
    
    
    ngOnInit(): void {
   // this.editFromApi()
  // this.getCurrentUser()

  }

  getCurrentUser() {
      return this._ProfileService.getCurrentUser().subscribe({
        next: (res) => {
        //  console.log(res);
          this.user = res;
        },
        error: (err) => {
          console.log(err.error.message);
        },
        complete: () => {
          this.imgSrc = this.imgUrl + this.user?.imagePath;
           this.updateForm.patchValue({
          userName: this.user?.userName,
          email: this.user?.email,
          country: this.user.country,
          phoneNumber: this.user.phoneNumber,
          profileImage: this.imgSrc,
          confirmPassword: this.user.confirmPassword,
        });
        },
      });
    }

    onSubmit(data: FormGroup):void{
     // console.log(data.value);
      let mydata = new FormData();
      
      mydata.append('userName', data.value.userName);
      mydata.append('email', data.value.email);
      mydata.append('country', data.value.country);
      mydata.append('phoneNumber', data.value.phoneNumber);
      mydata.append('profileImage', this.imgSrc, this.imgSrc.name);
      mydata.append('confirmPassword', data.value.confirmPassword);
  
      this._ProfileService.updateCurrentProfile(mydata).subscribe({
            next: (res: any) => {
             // console.log(res);
              
            },
            error: (err: any) => {
            //  console.log(err.error.message);
            
              this._ToastrService.error(err.error.message , 'Notify That')
            },
            complete: () => {
              this._ToastrService.success('Profile has been updated successfully', 'Done')
             this._Router.navigate(['/dashboard/home']);
            // console.log('success');
             
            },
          });    
    }

// editProfile(data:FormData){
//   this._ProfileService.updateCurrentProfile(data).subscribe({
//     next: (res: any) => {
//       console.log(res);
      
//     },
//     error: (err: any) => {
//       console.log(err.error.message);
//     },
//     complete: () => {
//      this._Router.navigate(['/dashboard/home']);
//      console.log('success');
     
//     },
//   });
//  }

// editFromApi(mydata:FormData){
//   this._ProfileService.updateCurrentProfile(mydata).subscribe({
//     next:(res)=>{
//       this._ProfileService.userName.next(res.userName);
//       this._ProfileService.userImg.next(res.imagePath);
//     }
//   })
//  }


   files: File[] = [];
   onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

 
  
}
