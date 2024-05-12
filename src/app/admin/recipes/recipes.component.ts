import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from './../../shared/delete/delete.component';
import { ICategory } from './../models/recipe';
import { CategoryService } from './../categories/services/category.service';
import { ITags } from '../models/recipe';
import { PageEvent } from '@angular/material/paginator';
import { RecipeService } from './services/recipe.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../assets/images/dummy-profile-pic-300x300-1.png';
  pageSize:number = 10;
  pageNumber:number = 1;
  categoryItem:string = '' ;
  listData:any;
  listTags:ITags[] = [];
  listCategories:ICategory[] = [];
  searchValue:string = '';
  tagId:number = 0;
  categoryId:number = 0;

   constructor(private _CategoryService:CategoryService ,  private _RecipeService:RecipeService , 
    public dialog: MatDialog , private _ToastrService:ToastrService){
     
   }
  ngOnInit(): void {
    this.getRecipesData();
    this.getTags();
    this.getAllCategories();
  }
 



  // Add Recipes Data
   getRecipesData(){
let paramData = {
  name: this.searchValue ,
  tagId: this.tagId ,
  categoryId: this.categoryId ,
  pageSize: this.pageSize ,
  pageNumber: this.pageNumber ,
}
     this._RecipeService.getAllRecipes(paramData).subscribe({
       next:(res)=>{
         console.log(res)
        this.listData = res;
       }
     })
   }
 
   // Delete
   openDeleteDialog(recipesData:any): void {
    console.log(recipesData)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: recipesData,
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
  
  this._RecipeService.onDeleteRecipes(id).subscribe({
    next:(res)=>{
     console.log(res);   
    },
    error:(err)=>{
      this._ToastrService.error(err.error.message , 'Notify That')
    },
    complete:()=>{
      this._ToastrService.success('Recipe deleted successfully', 'Done!')
      this.getRecipesData();
    }
  })
}

// Add Category
 addCategory(categoryName:FormData) {
   this._RecipeService.onAddRecipes(categoryName).subscribe({
     next:(res)=>{
       console.log(res)
     },
     error:()=>{
     },
     complete:()=>{
       this.getRecipesData();
     }
   })
 }
 
 handlePageEvent(e: PageEvent) {
  // console.log(e)
   this.pageSize = e.pageSize;
   this.pageNumber = e.pageIndex;
 // Any change in pageSize | pageNumber ==> Call API Again
   this.getRecipesData();
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
  this._CategoryService.getCategories(1000 , 1).subscribe({
    next:(res)=>{
     // console.log(res)
     this.listCategories = res.data;
    }
  })
}


}
