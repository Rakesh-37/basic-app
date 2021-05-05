import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechologiesComponent } from './techologies/techologies.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import{HttpClientModule}from '@angular/common/http';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutUsComponent,
    TechologiesComponent,
    TypescriptComponent,
    JavascriptComponent,
    BootstrapComponent,
    SquarePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
