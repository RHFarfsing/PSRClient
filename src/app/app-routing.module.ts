import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestLineEditComponent } from './requestLine/request-line-edit/request-line-edit.component';
import { RequestLineCreateComponent } from './requestLine/request-line-create/request-line-create.component';
import { RequestLineComponent } from './requestLine/request-line/request-line.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",redirectTo:"/users/list",pathMatch:"full"},
  {path:"users/list",component:UserListComponent},
  {path:"users/detail/:id",component:UserDetailComponent},
  {path:"users/create",component:UserCreateComponent},
  {path:"users/edit/:id",component:UserEditComponent},
  {path:"products/list",component:ProductListComponent},
  {path:"products/detail/:id",component:ProductDetailComponent},
  {path:"products/create",component:ProductCreateComponent},
  {path:"products/edit/:id",component:ProductEditComponent},
  {path:"vendors/list",component:VendorListComponent},
  {path:"vendors/detail/:id",component:VendorDetailComponent},
  {path:"vendors/create",component:VendorCreateComponent},
  {path:"vendors/edit/:id",component:VendorEditComponent},
  {path:"requests/list",component:RequestListComponent},
  {path:"requests/detail/:id",component:RequestDetailComponent},
  {path:"requests/edit/:id",component:RequestEditComponent},
  {path:"requests/create",component:RequestCreateComponent},
  {path:"requestlines/requestline/:id",component:RequestLineComponent},
  {path:"requestlines/edit/:id",component:RequestLineEditComponent},
  {path:"requestlines/create/:id",component:RequestLineCreateComponent},
  {path:"login",component:LoginComponent},
  {path:"**", component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
