import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path:'search/:searchItem',component:MenuComponent},
  {path:'tag/:tag',component:MenuComponent},
  {path:'food/:id',component:FoodpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
