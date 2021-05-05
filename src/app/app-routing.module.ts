import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TechologiesComponent } from './techologies/techologies.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'techologies',component:TechologiesComponent,children:[
    {path:'',component:TypescriptComponent},
    {path:'javascript',component:JavascriptComponent},
    {path:'bootstrap',component:BootstrapComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
