import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [[NavbarComponent],[MainComponent],[FooterComponent]]
})
export class HomeComponent {

}
