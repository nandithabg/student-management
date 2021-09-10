import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
    
   
   }

   SignUp(email: string, password: string) {
     return this.afAuth.createUserWithEmailAndPassword(email, password)
    }
    
    /* Sign in */
    SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    }
    
    /* Sign out */
    SignOut() {
    this.afAuth.signOut();
    }
}
