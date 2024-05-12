import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {

  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../../../assets/images/dummy-profile-pic-300x300-1.png';

  constructor(
    public dialogRef: MatDialogRef<ViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

onNoClick(): void {
    this.dialogRef.close();
  }


}
