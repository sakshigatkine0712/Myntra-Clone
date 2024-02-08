import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faMagnifyingGlass, faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
user= faUser;
searchicon= faMagnifyingGlass;
cart= faShoppingBag;
wishlist= faHeart;
}
