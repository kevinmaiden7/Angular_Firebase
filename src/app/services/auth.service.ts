import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth
  ) {}

  logIn(email, password){
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.fireAuth.auth.signOut();
  }
}
