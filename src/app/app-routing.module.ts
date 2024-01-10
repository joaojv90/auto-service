import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CarsComponent } from './screens/cars/cars.component';
import { LoginComponent } from './screens/login/login.component';
import { PrivateComponent } from './screens/private/private.component';
import { UsComponent } from './screens/us/us.component';
import { Error404Component } from './screens/error404/error404.component';
import { loginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"cars", component:CarsComponent},
  {path:"login", component:LoginComponent},
  {path:"private", component:PrivateComponent, canActivate:[loginGuardGuard]},
  {path:"us", component:UsComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }