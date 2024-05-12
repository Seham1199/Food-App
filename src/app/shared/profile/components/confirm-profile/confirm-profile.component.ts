import { ProfileService } from './../../services/profile.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirm-profile.component.html',
  styleUrls: ['./confirm-profile.component.scss']
})
export class ConfirmProfileComponent {
  errMessage:string = '' ;
  hide:boolean = true;
  form:any;
  imgSrc:any;
  constructor(public dialogRef: MatDialogRef<ConfirmProfileComponent>,private _ProfileService:ProfileService
    , private _ToastrService:ToastrService
  ) { }

  ngOnInit() {
  }
 







}
