import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
 
 /*  if the user is not logged in 
 'isLoggedIn' key does not exist or has a value other than 'true'(false)), 
 isLoggedOut will be true.*/
 
 let isLoggedOut = localStorage.getItem('isloggedIn') !== 'true';
    if (!isLoggedOut) {// if isLoggedOut is false 
      _router.navigate(['/home']); // Redirect to home if already logged in
      return false;
    }
    return true;// redirect to login page if isLoggedOut is true
  
};
