import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';
import { FavService } from './services/fav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  imgUrl:string = 'https://upskilling-egypt.com:3006/';
  emptyImg:string = '../../../assets/images/mealplan-kidsstoppress.jpg';
  pageSize:number = 10;
  pageNumber:number = 1;
  listFav:any;
constructor(private _FavService:FavService , private _Router:Router , private _ToastrService:ToastrService){
}
  ngOnInit(): void {
    this.getAllFav();
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
     // console.log(err.error.message);
     
    },
    complete:()=>{
     
    }
  })
}

removeFav(id:number){
  this._FavService.deleteFavRecipes(id).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
//console.log(err.error.message);
this._ToastrService.error(err.error.messsage , 'Notify That')
    },
    complete:()=>{ 
      this._ToastrService.success('Deleted From Favourite' , 'Done!') 
    // this._Router.navigate(['/dashboard/user/favourites'])
      this.getAllFav();
    }
  })
}
handlePageEvent(e: PageEvent) {
  // console.log(e)
   this.pageSize = e.pageSize;
   this.pageNumber = e.pageIndex;
 // Any change in pageSize | pageNumber ==> Call API Again
   this.getAllFav();
 }


}

