import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private usersCollection = "users";

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  /*
    Se agrega un nuevo usuario a lista de autenticación de FirebaseAuth y a la base
    de datos Firestore. Se mantiene el mismo UID para ambos registros.
  */
  addUser(data, password){
    this.authService.createUser(data.email, password).then(cred => {
      return new Promise<any>((resolve, reject) =>{
        this.firestore.collection(this.usersCollection).
        doc(cred.user.uid).set(data).then(res => {
            console.log("User successfully added!")
          }, error => console.log(error));
        });
    });
  }

  fetchUser(uid){
    return this.firestore.collection(this.usersCollection).
    doc(uid).get().toPromise();
  }

}
