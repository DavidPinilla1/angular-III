import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/user/login/login.component';
import { SignupComponent } from './containers/user/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './containers/add-product/add-product.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
