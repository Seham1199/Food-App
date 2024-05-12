import { ToastrService } from 'ngx-toastr';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { IUserTable } from './models/users';
import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { CategoryService } from '../categories/services/category.service';
import { ITags, ICategory } from '../models/recipe';
import { RecipeService } from '../recipes/services/recipe.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../assets/images/dummy-profile-pic-300x300-1.png';
  pageSize:number = 10;
  pageNumber:number = 1;
  categoryItem:string = '' ;
  listData:any;
  listTags:ITags[] = [];
  listCategories:ICategory[] = [];
  searchValue:string = '';
  roleIds:number[] = [];
  paramsKey:string = '';

   constructor(private _UsersService:UsersService  ,private _CategoryService:CategoryService ,  
    private _RecipeService:RecipeService , public dialog: MatDialog , private _ToastrService:ToastrService){
     this.getUsersData();
     this.getTags();
     this.getAllCategories();
   }
 
   getUsersData(){
       
let paramData = {
   [this.paramsKey]: this.searchValue,
  // email: this.tagId ,
  // country: this.categoryId ,
  groups: this.roleIds ,
  pageSize: this.pageSize ,
  pageNumber: this.pageNumber ,
}


     this._UsersService.getAllUsers(paramData).subscribe({
       next:(res:IUserTable)=>{
        // console.log(res)
        this.listData = res;
       }
     })
   }
 
   openViewUserDialog(userData:any): void {
    console.log(userData)
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data:userData,
      width:'700px' ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    console.log(result);

    if (result) {
     this.onDeleteItem(result);
    }
    });
  }

   openDeleteDialog(userData:any): void {
    console.log(userData)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: userData ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    console.log(result);

    if (result) {
     this.onDeleteItem(result.id);
    }
    });
  }

onDeleteItem(id:number){
  
  this._UsersService.onDeleteUsers(id).subscribe({
    next:(res)=>{
     console.log(res);   
    },
    error:(err)=>{
    this._ToastrService.error(err.error.message , 'Notify That')
    },
    complete:()=>{
      this._ToastrService.success('User deleted successfully', 'Done!')
      this.getUsersData();
    }
  })
}

 addCategory(categoryName:FormData) {
   this._RecipeService.onAddRecipes(categoryName).subscribe({
     next:(res)=>{
       console.log(res)
     },
     error:()=>{
 
     },
     complete:()=>{
       this.getUsersData();
     }
   })
 }
 
 handlePageEvent(e: PageEvent) {
  // console.log(e)
   this.pageSize = e.pageSize;
   this.pageNumber = e.pageIndex;
 // Any change in pageSize | pageNumber ==> Call API Again
   this.getUsersData();
 }

 getTags(){
  this._RecipeService.getAllTags().subscribe({
    next:(res:ITags[])=>{
     // console.log(res)
     this.listTags = res;
    }
  })
}

getAllCategories(){
  this._CategoryService.getCategories(10000 , 1).subscribe({
    next:(res)=>{
     // console.log(res)
     this.listCategories = res.data;
    }
  })
}



}
