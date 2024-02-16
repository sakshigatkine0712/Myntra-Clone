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

//(!)( "definite assignment assertion" operator) tells TypeScript that these properties will be initialized before they are accessed. 
 loginform !: FormGroup;// FormGroup allows you to manage the form as a single entity.
 otpform !: FormGroup;
  mobilenumber: any; // storing the value of mobile input field
  otpnumber: any;// storing the value of otp input field
  public isLoggin= false;// initially set to false means loginform is display (for which form has to display (login/otp))
  timeLeft = 10; //10 sec at initial
   interval :any; // variable for timer looping

  
  
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
constructor(private formBuilder: FormBuilder, private router: Router){}
  
  //Validations
  //ngOnInit() It is commonly used for initializing component properties, fetching data from a service, or performing any setup tasks needed for the component.
  ngOnInit(): void {

  this.loginform = this.formBuilder.group({
  //FormControl represents a single input field (contactNo is FormControl)
    contactNo:['',
  [
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(10)
  ]]
  })

  this.otpform = this.formBuilder.group({
    OTP:['',
    [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4)
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
  this.startTimer();//calling the timer decrement function.
} 
else {
  // If the user does not exist
  alert('User does not exist');
  this.loginform.reset();//reset the form

}

}
//-------------------------------------------------------------------------------------
  //  Timer Code (Validation Page OTP timer Code)


// function for resend btn when we click on resend btn it will again start the timer
  resend()
{
  this.timeLeft = 10;//at initial it take 10 seconds 
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
  this.otpnumber = this.otpform.get('OTP')?.value;
  //get the value of otp input field

 // Check if the entered otp exists in the users array
 const otpfound = this.users.find(user => user.otp == this.otpnumber);

 if (otpfound) {
  // if otp is found then navigate to the home page
  alert("Login Successfully!");
  this.router.navigate(['/home']); //and then redirect to the home.
  
} 
else {
  // If not found then show the error message
  alert('Invalid OTP');
  this.otpform.reset();

}
}


}