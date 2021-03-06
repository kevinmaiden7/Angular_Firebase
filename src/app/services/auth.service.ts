import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
    AngularFireAuth.auth returns an initialized firebase.auth.Auth instance for
    using all the methods we will work with.
  */

  // Observador para identificar el estado actual de autenticación
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private fireAuth: AngularFireAuth,
    //private firestoreService: FirestoreService
  ) {
    this.user = this.fireAuth.authState;
    this.user.subscribe((user) => {
      if(user) this.userDetails = user;
      else this.userDetails = null;
    });
  }

  logIn(email, password){
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.fireAuth.auth.signOut();
  }

  createUser(email, password){
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  // Obtener el estado de autenticación
  get authenticated(): boolean {
    var value = localStorage.getItem("authenticated");
    return (value == "true");
  }

  get getCurrentUserUID(){
    var value = localStorage.getItem("uid");
    return (value);
  }

  get getCurrentUserRole(){
    var value = localStorage.getItem("rol");
    return (value);
  }

  get getCurrentUserEmail(){
    var value = localStorage.getItem("email");
    return (value);
  }

  //
  // Obtener el observador del usuario actual
  get currentUser(): firebase.User {
    return this.userDetails;
  }

}
