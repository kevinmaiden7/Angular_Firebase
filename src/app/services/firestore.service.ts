import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  addUser(data){
    //return this.firestore.collection("users").add(data);
    console.log("entering addUser");
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .add(data).then(res => {
            console.log("User successfully added!")
          }, err => reject(err));
        });
  }
}
