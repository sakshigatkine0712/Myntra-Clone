import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent implements OnInit{


  public loginform !: FormGroup;
  public submitted!: false;//form not submitted when we load the pade first time
  mobilenumber: any; // storing the value of mobile input field
  public isLoggin= false;// initially set to false means loginform is display (for which form has to display (login/otp))
  contactNo: any;
  
   // Typescript array
  // array of object (users). Declaring an Array of Objects in Inline Type | for login data beacause we don't have any database.
   users: 
  { firstName: string, lastName: string, mobilenum: number, gender: string, otp: number }[] = [
   { "firstName": 'Sakshi', "lastName": "Gatkine", "mobilenum": 1234567890 , gender: 'Female', otp: 1234  },
   { "firstName": 'Hriday', "lastName": "abc", "mobilenum": 2121212121 , gender: 'Male', otp: 4256  },
   { "firstName": 'Shwetant', "lastName": "cdv", "mobilenum": 1212121212 , gender: 'Male', otp: 2345  },
   { "firstName": 'Aditi', "lastName": "gdfgf", "mobilenum": 2323232323 , gender: 'Female', otp: 5090  },
   { "firstName": 'Mridul', "lastName": "asd", "mobilenum": 3232323232 , gender: 'Male', otp: 8430  },
   { "firstName": 'Shital', "lastName": "mbn", "mobilenum": 3030303030 , gender: 'Female', otp: 1245  },
   { "firstName": 'Vikas', "lastName": "wer", "mobilenum": 4141414141, gender: 'Male', otp: 6709  },
   { "firstName": 'Shivam', "lastName": "fgh", "mobilenum": 1414141414 , gender: 'Male', otp: 4378  },
   { "firstName": 'Rohit', "lastName": "ggn", "mobilenum": 5050505050 , gender: 'Male', otp: 2309  },
   { "firstName": 'Madhura', "lastName": "sdf", "mobilenum": 4545454545 , gender: 'Female', otp: 9456  },
   ];


  constructor(private formBuilder: FormBuilder, private router: Router){}
  //Validations
  ngOnInit(): void {
  this.loginform = this.formBuilder.group({
  contactNo:['',
  [
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(10)
  ]]
  })

}


 
//-----------------------------------------------------------------------------------
// Login Continue button code 
// contactNo: any;
// loginform= new  FormGroup({
// contactNo :  new FormControl('')// formControl for mobilenumber input
// }); // formGroup for form tag



// Continue button code
    onSubmit() {
  // ?. (safe navigation operator) checks to ensure the property is not null or undefined before accessing its properties.
  this.mobilenumber = this.loginform.get('contactNo')?.value;
  console.log('here is the mobileNumber', this.mobilenumber);
  

  //get the value of mobile input field

 // Check if the entered mobile number exists in the users array
 const userExists = this.users.find(user => user.mobilenum == this.mobilenumber);


 if (userExists) {
  // If the user exists, set isLoggin to true to display the OTP page
  alert("Already Registered Mobile Number");
  this.isLoggin = true;
} 
else {
  // If the user does not exist
  alert('User does not exist');
  this.loginform.reset();

}
}
//-------------------------------------------------------------------------------------
  //  Timer Code (Validation Page OTP timer Code)

   timeLeft = 10; //30 sec at initial
  // interval: any;
   interval = setInterval(()=> this.countdown(this.timeLeft), 1000); // setting the inetrval for 1 sec timerlooping

// function for resend btn when we click on resend btn it will again start the timer
  resend()
{
  this.timeLeft = 10;
  this.interval = setInterval(()=> this.countdown(this.timeLeft), 1000);
  console.log('here the timeLeft', this.timeLeft);
  
}
// //  decrement timer code (function)
 countdown(n:number) {
  this.timeLeft--;
  if (this.timeLeft === 0) {
    clearInterval(this.interval);
    } 
   
}

//------------------------------------------------------------------------------------

// validations code 


}