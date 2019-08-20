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
    this.user.name= "admin";
    this.user.email="admin@admindomain.com";
    this.user.password="admin123";
    //this.firestoreService.addUser(this.user);
  }

}
