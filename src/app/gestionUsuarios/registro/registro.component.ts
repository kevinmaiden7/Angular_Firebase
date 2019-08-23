import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.user.nombres="";
    this.user.apellidos="";
    this.user.rol="";
    this.user.email="";
  }
  
  agregarUsuario(form: NgForm){
    this.firestoreService.addUser(this.user, this.userPassword);
    this.router.navigate(['']);
  }
}
