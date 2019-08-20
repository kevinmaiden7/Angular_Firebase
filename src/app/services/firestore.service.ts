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
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .add(data)});
  }
}
