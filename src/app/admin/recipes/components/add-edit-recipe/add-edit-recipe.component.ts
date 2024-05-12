import { ToastrService } from 'ngx-toastr';
import { ICategory } from './../../../models/recipe';
import { CategoryService } from './../../../categories/services/category.service';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITags } from 'src/app/admin/models/recipe';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent implements OnInit{
  recipeForm = new FormGroup({
    name: new FormControl('' , [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    tagId: new FormControl('', [Validators.required]),
    categoriesIds: new FormControl('', [Validators.required]),
    recipeImage:new FormControl('')
  })
  listTags:ITags[] = [];
  listCategories:ICategory[] = [];
  recipeId:number = 0;
  recipeData:any ;
  imgSrc:any;
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  isUpdatePage:boolean= false;
  isViewPage:boolean = false;
constructor(private _RecipeService:RecipeService , private _CategoryService:CategoryService ,
   private _ActivatedRoute:ActivatedRoute , private _Router:Router , private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this.recipeId = this._ActivatedRoute.snapshot.params['id'];
  if (this.recipeId) {
    // edit
    this.isUpdatePage = true;
    this.getRecipeById(this.recipeId);
  }else{
    // add
    this.isUpdatePage = false;
  }

 this._ActivatedRoute.url.subscribe(url =>{
this.isViewPage = url.some(segment => segment.path === 'view');
//console.log(this.isViewPage);
this.disableFormControls();
 });



    this.getTags();
    this.getAllCategories();
  }


  getRecipeById(id:number){
    this._RecipeService.getRecipeById(id).subscribe({
      next:(res)=>{
 //  console.log(res);
  this.recipeData = res;
      },error:(err)=>{
console.log(err)
      },complete:()=>{
        this.imgSrc = this.imgUrl + this.recipeData?.imagePath;
        this.recipeForm.patchValue({
          name:this.recipeData?.name,
          price:this.recipeData?.price,
          tagId:this.recipeData?.tag.id,
          categoriesIds:this.recipeData?.category[0].id,
          description:this.recipeData?.description,
          
        }); 
      }
    })
  }


onSubmit(data:FormGroup) {
 // console.log(data.value)
let myData = new FormData();
myData.append('name' , data.value.name);
myData.append('description' , data.value.description);
myData.append('price' , data.value.price);
myData.append('tagId' , data.value.tagId);
myData.append('categoriesIds' , data.value.categoriesIds);
myData.append('recipeImage' , this.imgSrc , this.imgSrc.name);
//myData.append('recipeImage' , this.imgSrc)

   if (this.recipeId) {
   this.edit(this.recipeId , myData)
   } else {
    this.add(myData);
   }
}

add(formData:FormData){
  this._RecipeService.onAddRecipes(formData).subscribe({
    next:(res)=>{
     console.log(res); 
    },
    error:(err)=>{
      console.log(err.error.message);
      this._ToastrService.error(err.error.message , 'Notify That')
    },
    complete:()=>{
      this._ToastrService.success('Recipes added Successfully' , 'Done!')
      this._Router.navigate(['/dashboard/admin/recipes']);
    }
  })
}
edit(id:number ,formData:FormData){
  this._RecipeService.editRecipe(id,formData).subscribe({
    next:(res)=>{
     console.log(res); 
    },
    error:(err)=>{
      console.log(err.error.message);
      this._ToastrService.error('err.error.message' , 'Notify That')
    },
    complete:()=>{
      this._ToastrService.success('Recipes Updated Successfully' , 'Done!')
      this._Router.navigate(['/dashboard/admin/recipes']);
    }
  })
}

disableFormControls() {
 if (this.isViewPage) {
  this.recipeForm.get('name')?.disable();
  this.recipeForm.get('description')?.disable();
  this.recipeForm.get('price')?.disable();
  this.recipeForm.get('tagId')?.disable();
  this.recipeForm.get('categoriesIds')?.disable();
  this.recipeForm.get('recipeImage')?.disable();
 }
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
  files: File[] = [];
  onSelect(event:any) {
    console.log(event);
    this.imgSrc= event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}




