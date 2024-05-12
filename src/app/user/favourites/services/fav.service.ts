import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private _HttpClient:HttpClient) { }
  // Get All fav Recipes
   getAllFavRecipes(param:any):Observable<any> {
     return this._HttpClient.get(`userRecipe`, {params:param})
   }

   // Send All fav Recipes
   onAddFavRecipes(id:number):Observable<any> {
    return this._HttpClient.post(`userRecipe` , {recipeId:id})
  }

  // Delete fav Recipes
  deleteFavRecipes(id:number):Observable<any> {
    return this._HttpClient.delete(`userRecipe/${id}`);
  }
}
