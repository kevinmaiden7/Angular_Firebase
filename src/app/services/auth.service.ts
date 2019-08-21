import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
    AngularFireAuth.auth returns an initialized firebase.auth.Auth instance for
    using all the methods we will work with.
  */

  constructor(
    private fireAuth: AngularFireAuth
  ) {}

  logIn(email, password){
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.fireAuth.auth.signOut();
  }

  createUser(email, password){
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
