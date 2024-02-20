import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
 
  let isLoggedOut = localStorage.getItem('isloggedIn') !== 'true';
    if (!isLoggedOut) {
      _router.navigate(['/home']); // Redirect to home if already logged in
      return false;
    }
    return true;
  
};
