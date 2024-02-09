import { Component } from '@angular/core';
import { FormControl,FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
// Typescript array
  // array of object (users). Declaring an Array of Objects in Inline Type | for login data beacause we don't have any database.
   users: { firstName: string, lastName: string, mobilenum: number, gender: string, otp: number }[] = [
    { "firstName": 'Sakshi', "lastName": "Gatkine", "mobilenum": 1234567890 , gender: 'Female', otp: 1234  },
    ];

    
}
