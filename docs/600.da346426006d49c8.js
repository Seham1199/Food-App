"use strict";(self.webpackChunkfood_App=self.webpackChunkfood_App||[]).push([[600],{600:(y,p,i)=>{i.r(p),i.d(p,{FavouritesModule:()=>F});var l=i(6839),a=i(6814),s=i(3403),t=i(5879),d=i(2875),m=i(2425),f=i(8937),v=i(3365),u=i(4478);function _(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"div",17),t.NdJ("click",function(){const g=t.CHM(e).$implicit,Z=t.oxw(2);return t.KtG(Z.removeFav(g.id))}),t.TgZ(4,"a"),t._UZ(5,"i",18),t.qZA()()(),t.TgZ(6,"div",19),t._UZ(7,"i",20),t.qZA(),t.TgZ(8,"div",21),t._UZ(9,"img",22),t.qZA(),t.TgZ(10,"div",23)(11,"h2",24),t._uU(12),t.qZA(),t.TgZ(13,"div",25)(14,"span",26),t._UZ(15,"i",27),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"span",28),t._UZ(19,"i",29),t._uU(20),t.ALo(21,"date"),t.qZA()(),t.TgZ(22,"p",30),t._uU(23),t.ALo(24,"trim"),t.qZA()()()()}if(2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(9),t.Q6J("src",e.recipe.imagePath?o.imgUrl+e.recipe.imagePath:o.emptyImg,t.LSH),t.xp6(3),t.Oqu(e.recipe.name),t.xp6(4),t.Oqu(t.xi3(17,5,e.recipe.creationDate,"dd/mm/yyyy")),t.xp6(4),t.hij("",t.xi3(21,8,e.recipe.modificationDate,"mm")," Minutes"),t.xp6(3),t.Oqu(t.lcZ(24,11,e.recipe.description))}}function h(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",31),t._UZ(2,"app-no-data"),t.qZA(),t.BQk())}const C=function(){return[4,8,16,20]};function O(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"mat-paginator",32,33),t.NdJ("page",function(c){t.CHM(e);const g=t.oxw(2);return t.KtG(g.handlePageEvent(c))}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("length",20)("pageSize",e.pageSize)("pageIndex",e.pageNumber)("pageSizeOptions",t.DdM(4,C))}}function M(n,r){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,_,25,13,"div",12),t.YNc(2,h,3,0,"ng-container",13),t.YNc(3,O,3,5,"div",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.listFav),t.xp6(1),t.Q6J("ngIf",0==e.listFav.length),t.xp6(1),t.Q6J("ngIf",e.listFav.length>0)}}const x=[{path:"",component:(()=>{class n{constructor(e,o,c){this._FavService=e,this._Router=o,this._ToastrService=c,this.imgUrl="https://upskilling-egypt.com:3006/",this.emptyImg="../../../assets/images/mealplan-kidsstoppress.jpg",this.pageSize=10,this.pageNumber=1}ngOnInit(){this.getAllFav()}getAllFav(){this._FavService.getAllFavRecipes({pageSize:this.pageSize,pageNumber:this.pageNumber}).subscribe({next:o=>{console.log(o),this.listFav=o.data},error:o=>{},complete:()=>{}})}removeFav(e){this._FavService.deleteFavRecipes(e).subscribe({next:o=>{console.log(o)},error:o=>{this._ToastrService.error(o.error.messsage,"Notify That")},complete:()=>{this._ToastrService.success("Deleted From Favourite","Done!"),this.getAllFav()}})}handlePageEvent(e){this.pageSize=e.pageSize,this.pageNumber=e.pageIndex,this.getAllFav()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(d.g),t.Y36(s.F0),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-favourites"]],decls:20,vars:1,consts:[[1,"page-title","px-3"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-8"],[1,""],[1,"col-md-4","text-end"],[1,"users-img"],["src","../../../assets/images/Group 48102127.svg","alt","",1,"w-50"],[1,"fav","py-3"],[1,"container","mt-4"],["class","row g-4",4,"ngIf"],[1,"row","g-4"],["class","col-md-4 ",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-md-4"],[1,"recipe-card","bg-warning","bg-white","border","border-1","shadow","rounded-3","position-relative","overflow-hidden"],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","z-2","rounded-3","shadow-sm","d-flex","justify-content-center","align-items-center"],[1,"px-3","py-2","rounded-3","fav-icon",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"position-absolute","top-0","end-0","m-2","z-1","heart","rounded-circle"],[1,"fa-solid","fa-heart","fa-2x"],[1,"recipe-image","overflow-hidden"],["alt","",1,"recipe-cell","object-fit-cover","w-100","rounded-top-3",3,"src"],[1,"recipe-caption","bg-secondar","text-center","py-3"],[1,"mt-1"],[1,"d-flex","justify-content-evenly","mt-5"],[1,"time"],[1,"fa-regular","fa-calendar-days","me-2"],[1,"text-uppercase","time"],[1,"fa-solid","fa-clock","me-2"],[1,"text-muted","mt-1","desc"],[1,"col-md-6","mx-auto"],["aria-label","Select page",1,"mdc-text-field--outlined",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["paginator",""]],template:function(o,c){1&o&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h1"),t._uU(7,"Favourite "),t.TgZ(8,"span"),t._uU(9,"items!"),t.qZA()(),t.TgZ(10,"p"),t._uU(11,"You can now add your items that any user can order it from"),t._UZ(12,"br"),t._uU(13," the Application and you can edit"),t.qZA()()(),t.TgZ(14,"div",5)(15,"div",6),t._UZ(16,"img",7),t.qZA()()()()()(),t.TgZ(17,"section",8)(18,"div",9),t.YNc(19,M,4,3,"div",10),t.qZA()()),2&o&&(t.xp6(19),t.Q6J("ngIf",c.listFav))},dependencies:[a.sg,a.O5,f.d,v.NW,a.uU,u.Z],styles:['.page-title[_ngcontent-%COMP%]{background-image:url(header-bg-svg.e7cd2c7a9e952177.svg);background-color:#009247;border-radius:15px;color:#fff}.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;font-size:700}.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:32px;font-weight:400;color:#dfe0e0}.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.recipe-card[_ngcontent-%COMP%]:hover   .recipe-cell[_ngcontent-%COMP%]{transform:scale(1.1)}.recipe-card[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]{transform:translateY(0)}.recipe-card[_ngcontent-%COMP%]   .recipe-cell[_ngcontent-%COMP%]{width:200px;height:200px;transition:.5s all .3s}.recipe-card[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{background-color:#00000080;transform:translateY(100%);transition:.5s}.recipe-card[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   .fav-icon[_ngcontent-%COMP%]{background-color:red;cursor:pointer;transition:.3s}.recipe-card[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   .fav-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;transition:.3s}.recipe-card[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   .fav-icon[_ngcontent-%COMP%]:hover{background-color:#fff}.recipe-card[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   .fav-icon[_ngcontent-%COMP%]:hover:hover   i[_ngcontent-%COMP%]{color:red}.recipe-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px!important;font-weight:500;color:#1f263e;letter-spacing:1.1px;position:relative;transition:.3s}.recipe-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover{color:#1f9b35}.recipe-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-50%;left:50%;transform:translate(-50%,-50%);width:20%;height:3px;background-color:#1f9b35}.recipe-card[_ngcontent-%COMP%]   p.desc[_ngcontent-%COMP%]{font-size:18px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.recipe-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#1f9b35}.recipe-card[_ngcontent-%COMP%]   span.time[_ngcontent-%COMP%]{font-size:18px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.recipeImg[_ngcontent-%COMP%]{width:90px;height:90px}.menu-icons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#1f9b35}.menu-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1f263e;font-size:14px}.table-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#1f263e}.table-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#323c47}.table-caption[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#1f9b35}.mdc-text-field--outlined[_ngcontent-%COMP%]{--mdc-outlined-text-field-focus-outline-color: #1f9b35 ;--mdc-outlined-text-field-hover-outline-color: #1f9b35 ;transition:.3s ease-in-out}.mdc-text-field--outlined[_ngcontent-%COMP%]   .labelIn[_ngcontent-%COMP%]{color:#1f9b35}.mdc-evolution-chip-set[_ngcontent-%COMP%]   .mdc-evolution-chip[_ngcontent-%COMP%]{margin-left:0}.heart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:red}']})}return n})()}];let P=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]})}return n})(),F=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[a.ez,P,l.m]})}return n})()}}]);