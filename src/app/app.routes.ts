import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { authGuard } from './auth.guard';
import { homeGuard } from './home.guard';


// Routing configuration
export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full',  },//Onloading the website login page will be apear
    { path: 'login', component: LoginComponent , canActivate:[homeGuard]},
    // we have add canActivate for authentication purposes so basically it will check if the user is login or not if login then redirect to home page
    { path: 'home', component: HomeComponent ,canActivate:[authGuard]},//inside home we  have nav, main , and footer
    { path: '**', redirectTo: '/login' , } //when none of the path matches
 ];
