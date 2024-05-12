import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 constructor(private _HttpClient:HttpClient) { }
 // Get All Recipes
  getAllRecipes(param:any):Observable<any> {
    return this._HttpClient.get(`Recipe` , {params:param})
  }
  // Send Data
  onAddRecipes(data:FormData):Observable<any>{
    return this._HttpClient.post(`Recipe` , data)
  }
  
 // Get Tags
  getAllTags():Observable<any> {
    return this._HttpClient.get(`tag`)
  }
  // Delete
  onDeleteRecipes(id:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${id}`)
  }
  // edit New Recipe
  getRecipeById(id:number):Observable<any>{
   return this._HttpClient.get(`Recipe/${id}`);
  }
  // Edit Recipe
  editRecipe(id:number , data:any):Observable<any> {
    return this._HttpClient.put(`Recipe/${id}` , data);
  }
}
