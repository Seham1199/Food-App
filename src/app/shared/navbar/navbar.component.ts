import { ChangePassComponent } from './../change-pass/change-pass.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from '../profile/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName:string = '' ;
  userImage:string = '' ;
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../assets/images/dummy-profile-pic-300x300-1.png';
  // role:string | any = '';
  // userName:string | any = '';
  currentUser:any;
  isSticky:boolean = false;
  isDarkBackground:boolean = false;
  isLightBackground:boolean=true;
  isIcon=true;
  constructor(private _AuthService:AuthService , public dialog: MatDialog , private _ProfileService:ProfileService){
    this.getCurrentUser()
    //  this.changeUserName()
    //  this.changeUserImg()
  }
  ngOnInit(): void {
    // this.takeRole()
    // this.takeUserName()
  }

  // userName = localStorage.getItem('userName');
  // role = localStorage.getItem('role');

getCurrentUser(){
  this._ProfileService.getCurrentUser().subscribe({
   next:(res)=>{
   // console.log(res);
    this.currentUser = res;
   },
   error:(err)=>{
    console.log(err.error.message);
    
   }
  })
}

// changeUserName(){
//   this._ProfileService.userName.subscribe({
//     next:(val)=>{
//       this.userName = val;
//     },
//     error:(err)=>{
//       console.log(err.error.message);   
//     },
//     complete:()=>{
//       console.log('yes');  
//     }
//   })
// }

// changeUserImg(){
//   this._ProfileService.userImg.subscribe({
//     next:(val)=>{
//       this.userImage = val;
//     },
//     error:(err)=>{
//       console.log(err.error.message);   
//     },
//     complete:()=>{
//       console.log('yes');  
//     }
//   })
// }

//   takeRole():void{
//     this.role =  this._AuthService.role;
//    // console.log(this.role)
//   }
// takeUserName():void {
//   this.userName = this._AuthService.userName;
//  // console.log(this.userName)
// }

// LogOut
openLogoutDialog(): void{
  const dialogRef = this.dialog.open(LogoutComponent, {
    data: {},
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      
    }
  }); 
}  
 // Change Password
 openDialogCahngePassword(): void {
  const dialogRef = this.dialog.open(ChangePassComponent, {
    data: {},
    width:'700px',
    height:'auto' 
  });
}

@HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY;
    this.isSticky = offset > 50; // Change the offset as needed
    this.isDarkBackground = offset > 100; // Adjust the offset where you want to change the background color
    this.isLightBackground= offset < 100;
  }

}
