import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';


// Routing configuration
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },//Onloading the website login page will be apear
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},//inside home we  have nav, main , and footer
    { path: '**', redirectTo: '/login' } //when none of the path matches
 ];
