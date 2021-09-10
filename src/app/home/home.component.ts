import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  errorMsg:string;
  signupMsg:string;
  email: string;
  password: string;
  username:string;

  constructor(private auth:AuthService,private router:Router){}
  
  
  signUp() {
    this.auth.SignUp(this.email, this.password)
    .then((result)=>{
      const user = firebase.auth().currentUser
      this.router.navigate(['/students']);
      return user.updateProfile({
          displayName: this.username
        })
    })
    .catch(
      error => this.errorMsg = error.message
    );
    this.email = '';
    this.password = '';
   
    }
    
  signIn() {
    this.auth.SignIn(this.email, this.password)
    .then(res =>{
      this.router.navigate(['/students']);
    })
    .catch(
      error => this.errorMsg = error.message
    );
    this.email = '';
    this.password = '';
  }
    
    

}
