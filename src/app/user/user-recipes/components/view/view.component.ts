import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { ITags, ICategory } from 'src/app/admin/models/recipe';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  recipeForm = new FormGroup({
    name: new FormControl('' , [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    tagId: new FormControl('', [Validators.required]),
    categoriesIds: new FormControl('', [Validators.required]),
    recipeImage:new FormControl('')
  })
 
  recipeId:number = 0;
  recipeData:any ;
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../../../assets/images/mealplan-kidsstoppress.jpg';
  isViewPage:boolean = false;
constructor(private _RecipeService:RecipeService  ,
   private _ActivatedRoute:ActivatedRoute ){ }

  ngOnInit(): void {
    this.recipeId = this._ActivatedRoute.snapshot.params['id'];
  if (this.recipeId) {    
    this.isViewPage = true;
    this.getRecipeById(this.recipeId);
  }else{
    this.isViewPage = false;
  }

 this._ActivatedRoute.url.subscribe(url =>{
this.isViewPage = url.some(segment => segment.path === 'view');
//console.log(this.isViewPage);
 });
  }


  getRecipeById(id:number){
    this._RecipeService.getRecipeById(id).subscribe({
      next:(res)=>{
 //  console.log(res);
  this.recipeData = res;
      },error:(err)=>{
console.log(err)
      },complete:()=>{
      
        this.recipeForm.patchValue({
          name:this.recipeData?.name,
          price:this.recipeData?.price,
          tagId:this.recipeData?.tag.id,
          categoriesIds:this.recipeData?.category[0].id,
          description:this.recipeData?.description,
          recipeImage:this.recipeData?.recipeImage
        }); 
      }
    })
  }




  //  getTags(){
  //    this._RecipeService.getAllTags().subscribe({
  //      next:(res:ITags[])=>{
  //       // console.log(res)
  //       this.listTags = res;
  //      }
  //    })
  //  }
  //  getAllCategories(){
  //    this._CategoryService.getCategories(1000 , 1).subscribe({
  //      next:(res)=>{
  //       // console.log(res)
  //       this.listCategories = res.data;
  //      }
  //    })
  //  }
 

}
