import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private _HttpClient:HttpClient) { }


getCategories(pageSize:number , pageNumber:number):Observable<any> {
  return this._HttpClient.get(`Category` , {params:{pageSize:pageSize , pageNumber:pageNumber}})
}

onAddCategory(itemName:string):Observable<any>{
  return this._HttpClient.post(`Category` , {name:itemName})
}

onDeleteCategories(id:number):Observable<any>{
  return this._HttpClient.delete(`Category/${id}`)
}

editCategory(id:number, data:string):Observable<any>{
  return this._HttpClient.put(`Category/${id}` , {name:data});
}


}
