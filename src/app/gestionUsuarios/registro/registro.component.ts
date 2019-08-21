import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {};
  userPassword = "";

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    console.log("entering register page");
    this.user.nombres="";
    this.user.apellidos="";
    this.user.email="";
  }
  
  agregarUsuario(){
    this.firestoreService.addUser(this.user, this.userPassword);
  }

}
