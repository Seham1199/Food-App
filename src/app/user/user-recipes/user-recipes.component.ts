import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { ITags, ICategory } from 'src/app/admin/models/recipe';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { FavService } from '../favourites/services/fav.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit{
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../assets/images/mealplan-kidsstoppress.jpg';
  pageSize:number = 10;
  pageNumber:number = 1;
  categoryItem:string = '' ;
  listData:any;
  listTags:ITags[] = [];
  listCategories:ICategory[] = [];
  searchValue:string = '';
  tagId:number = 0;
  categoryId:number = 0;
  listFav:any;
  isCell:boolean = true;
  //isTable:boolean = false;
isAdded:boolean = true;
   constructor(private _CategoryService:CategoryService ,  private _RecipeService:RecipeService ,
     public dialog: MatDialog , private _FavService:FavService , private _Router:Router,
    private _ToastrService:ToastrService
    ){
    

   }
  ngOnInit(): void {
    this.getRecipesData();
    this.getTags();
    this.getAllCategories();
    
  }
 

  addToFav(id:number){
    this._FavService.onAddFavRecipes(id).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
  //  console.log(err.error.message);
    this._ToastrService.error(err.error.messsage , 'Notify That')
      },
      complete:()=>{
        this.getAllFav();
        this._ToastrService.success('Added To Favourite Successfully' , 'Done!')
        //this._Router.navigate(['/dashboard/user/favourites']);             
      }
    })
  }
  getAllFav(){
    let param = {
      pageSize : this.pageSize,
      pageNumber : this.pageNumber,
    }
    this._FavService.getAllFavRecipes(param).subscribe({
      next:(res)=>{
        console.log(res);
        this.listFav = res.data;
      },
      error:(err)=>{
        console.log(err.error.message);
      },
      complete:()=>{
      
      }
    })
  }

cellMode(){
  //console.log('hi')
  this.isCell = true;
 // this.isTable = false;
}
tableMode(){
//  this.isTable = true ;
  this.isCell = false ;
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

    },
    complete:()=>{
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
