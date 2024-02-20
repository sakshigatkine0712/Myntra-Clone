import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

// this function returns the true or false value
export const authGuard: CanActivateFn = (route, state) => {//functional route guard for login and logout authentication
 
  let _router = inject(Router);//created object for router
  // let _cookie = inject(CookieService);//created object for cookie
  let isVerified = localStorage.getItem('isloggedIn');
  // const newUser = JSON.parse(localStorage.getItem('newUser') || '{}');  // if currentUer will give false value, then the default value will be {}.
 
  // if is user otp is not valid and the number not found in array then redirect to login page and set the authGuard to return false
  if(isVerified !== 'true'){
    _router.navigate(['/login']);
    console.log('hello');
    return false;
  }
  
  return true;// else redirect to home page (if both conditions are true)

};
