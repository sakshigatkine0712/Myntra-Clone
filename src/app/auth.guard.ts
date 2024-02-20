import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// this function returns the true or false value
export const authGuard: CanActivateFn = (route, state) => {//functional route guard for login and logout authentication
 
  let _router = inject(Router);//created object for router
  //getting the local storage value to isVerified variable
  let isVerified = localStorage.getItem('isloggedIn');
  // if is user otp is not valid and the number not found in array then redirect to login page and set the authGuard to return false
  if(isVerified !== 'true'){
    _router.navigate(['/login']);//route to login page
    return false;
  }
  
  return true;// else redirect to home page 

};
