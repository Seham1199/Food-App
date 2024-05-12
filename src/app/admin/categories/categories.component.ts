import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { CategoryService } from './services/category.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  pageSize:number = 10;
 pageNumber:number = 1;
 categoryItem:string = '' ;
 listData:any;
  constructor(private _CategoryService:CategoryService , public dialog: MatDialog ,
    private _ToastrService:ToastrService
  ){}

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData(){
    this._CategoryService.getCategories(this.pageSize , this.pageNumber).subscribe({
      next:(res)=>{
       // console.log(res)
       this.listData = res;
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      width:'550px',
      height:'auto' ,
      data: {name:this.categoryItem},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    console.log(result);

    if (result) {
      this.addCategory(result);
    }
    });
  }

addCategory(categoryName:string) {
  this._CategoryService.onAddCategory(categoryName).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      this._ToastrService.error(err.error.message , 'Notify That')
    },
    complete:()=>{
      this._ToastrService.success('Category added successfully', 'Done!')
      this.getCategoriesData();
    }
  })
}

handlePageEvent(e: PageEvent) {
 // console.log(e)
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
// Any change in pageSize | pageNumber ==> Call API Again
  this.getCategoriesData();
}


openDeleteDialog(categoryData:any): void {
  console.log(categoryData)
  const dialogRef = this.dialog.open(DeleteComponent, {
    data: categoryData,
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

this._CategoryService.onDeleteCategories(id).subscribe({
  next:(res)=>{
   console.log(res);   
  },
  error:(err)=>{
 console.log(err);
 this._ToastrService.error(err.error.message , 'Notify That')
  },
  complete:()=>{
    this._ToastrService.success('Category deleted successfully', 'Done!')
    this.getCategoriesData();
  }
})
}

openEditCategory(categoryData:any){
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: {categoryName:categoryData.name},  
      // width: '30%'
    });
    console.log(categoryData.name);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onEditCategory(categoryData.id,result);

      }
    });
  }
  onEditCategory(id:number, name:string){
    this._CategoryService.editCategory(id,name).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err.message);
        this._ToastrService.error(err.error.message , 'Notify That')
      },
      complete:()=>{
        this.getCategoriesData();
        this._ToastrService.success('Category edit successfully', 'Done!')
      }
    })
  }





}
