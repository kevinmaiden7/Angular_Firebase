import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {};

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    console.log("entering register page");
    this.user.name= "user1";
    this.user.email="user1@test.com";
    this.user.password="user1123";
    const promise = this.firestoreService.addUser(this.user);
    promise
    .then(data => console.log(data))
    .catch(e => console.log(e.message));
  }

}
