import { Component, OnInit, inject } from '@angular/core';
import {Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent implements OnInit{

//(!)( "definite assignment assertion" operator) tells TypeScript that these properties will be initialized before they are accessed. 
 loginform !: FormGroup;// FormGroup allows you to manage the form as a single entity.
 otpform !: FormGroup;
  mobilenumber: any; // storing the value of mobile input field
  otpnumber: any;// storing the value of otp input field
  public isLoggin= false;// initially set to false means loginform is display (for which form has to display (login/otp))
  timeLeft = 30; //10 sec at initial
  interval :any; // variable for storing the interval id.If you don't store the interval ID, you won't be able to clear the interval, and the timer will continue running indefinitely.
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
 
 

//In Angular, constructors are used for dependency injection.
// system will automatically provide instances of FormBuilder and Router when an instance of the component is created. 
//declares a private property formBuilder of type FormBuilder. 
//The FormBuilder is a service provided by Angular that helps you to create instances of FormGroups and FormControls(classes) in reactive forms.  
constructor(private formBuilder: FormBuilder, private router: Router,   private cookie: CookieService){}
//  private cookie: CookieService for the cookie service (to store the user data)
 isVerified = localStorage.getItem('isloggedIn');
  //ngOnInit() It is commonly used for initializing component properties, fetching data from a service, or performing any setup tasks needed for the component.
  ngOnInit(): void {
// authentication refresh on home  code

if(this.isVerified=='true')
{
  this.router.navigate(['/home']);
}
//initializing two form groups using the FormBuilder service.
  this.loginform = this.formBuilder.group({
  //FormControl represents a single input field (contactNo is FormControl)
    contactNo:['',
  [//array of validators
    //used Validators(class) to apply validation rules to the input fields
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(10),
  Validators.pattern('[0-9]{10}')
  ]]
  })

  this.otpform = this.formBuilder.group({
    otpnum:['',//initially set to empty string
    [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4),
    Validators.pattern('[0-9]*')//takes the number between 0 and 9
    ]]
  })

}


 
//-----------------------------------------------------------------------------------
// Login (Continue button code)
    
onSubmit() {
 // ?. (safe navigation operator) allows you to safely access properties and methods of an object without causing an error if the object is null or undefined.
  this.mobilenumber = this.loginform.get('contactNo')?.value;
  //get the value of mobile input field
  
 // Check if the entered mobile number exists in the users array
 const userExists = this.users.find(user => user.mobilenum == this.mobilenumber);


 if (userExists) {
  // alert("Already Registered Mobile Number");
  this.isLoggin = true; // If the user exists, set isLoggin to true to display the OTP page
  //localStorage can store the state of an application, allowing users to resume their work even after closing and reopening the browser.
  localStorage.setItem('newUser', JSON.stringify(userExists));//It stores the current user's information in the local storage. The user object is converted to a JSON string using JSON.stringify().
  this.startTimer();//calling the timer decrement function.
} 
else {
  // If the user does not exist
  alert('Mobile Number is not Registered, Sign Up First');
  this.loginform.reset();//reset the form

}

}
//-------------------------------------------------------------------------------------
  //  Timer Code (Validation Page OTP timer Code)


// function for resend btn when we click on resend btn it will again start the timer
  resend()
{
  this.timeLeft = 30;//at initial it take 10 seconds 
  this.startTimer();// calling startTimer (timer decrement function)  
  this.otpform.reset();//clear input fields
}
 //  decrement timer code (function)
//this function decrement the timeLeft variable(start from 10)one by one at every 1 sec interval  
startTimer() {
  this.interval = setInterval(() => {
    if (this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      clearInterval(this.interval);//if timeLeft is 0 then it will clear the interval
    }
  }, 1000);
}

//------------------------------------------------------------------------------------
// OTP Match Code 
onVerify()
{
  this.otpnumber = this.otpform.get('otpnum')?.value;
  //get the value of otp input field

 // Check if the entered otp exists in the users array
 const otpfound = this.users.find(user => user.otp == this.otpnumber);

 if (otpfound) {
  // if otp is found then navigate to the home page
  alert("Login Successfully!");
  //Cookies are often used for session management, user authentication, and tracking user behavior.
  localStorage.setItem('isloggedIn', 'true');//It sets a  variable 'isloggedIn, with the value 'true' to indicate successful OTP verification.
  this.router.navigate(['/home']); //and then redirect to the home.  
} 
else {
  // If not found then show the error message
  localStorage.setItem('isloggedIn', 'false');
  alert('Invalid OTP');
  this.otpform.reset();  
}
}
//------------------------------------------------------------------------------------
//Validations error Code
//Error display function for login contact field
getErrorMessageContact()
{

  const contactNoControl = this.loginform.get('contactNo');
  console.log(contactNoControl);
  if (contactNoControl?.errors) {
    if (contactNoControl.errors['required']) {
      return 'Mobile Number is Required';
    }
    if (contactNoControl.errors['minlength']) {
      return 'Please enter the valid Mobile Number';
    }
    if (contactNoControl.errors['maxlength']) {
      return 'Please enter the valid Mobile Number';
    }
    if (contactNoControl.errors['pattern']) {
      return 'Please enter the valid Mobile Number';
    }
  }
  return;
}

//Error display function for otp input field
getErrorMessageOtp()
{
  const otpControl = this.otpform.get('otpnum');
  if (otpControl?.errors) {
    if (otpControl.errors['required']) {
      return 'OTP is Required';
    }
    if (otpControl.errors['minlength']) {
      return 'Please enter the valid OTP';
    }
    if (otpControl.errors['maxlength']) {
      return 'Please enter the valid OTP';
    }
    if (otpControl.errors['pattern']) {
      return 'Please enter the valid OTP';
    }
  }
  return;
}

}


