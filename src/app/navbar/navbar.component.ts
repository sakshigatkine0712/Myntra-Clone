import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faMagnifyingGlass, faShoppingBag, faHeart, faSignOut} from '@fortawesome/free-solid-svg-icons';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) { }


user= faUser;
searchicon= faMagnifyingGlass;
cart= faShoppingBag;
wishlist= faHeart;
logout= faSignOut;

logoutfn()
{
  localStorage.removeItem('isloggedIn');
  localStorage.removeItem('newUser');
  this.router.navigate(['/login']);
}
}
