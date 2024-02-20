import { Component } from '@angular/core'; // Import the Component decorator
import { RouterOutlet } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',//Specifying a component's CSS selector .CSS selector used to identify this component in HTML templates
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',//Defining a component's template. URL to the HTML template file for this component(To define a template as an external file "templateUrl" property is used and To define a template within the component "template" property is used)
  styleUrl: './app.component.scss'//Declaring a component's styles

})
export class AppComponent {
  // Component logic and properties go here
  title = 'Myntra Clone';

}
