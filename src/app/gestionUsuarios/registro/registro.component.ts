import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { Role } from '../../security/models';

export interface Roles {
  value: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {};
  userPassword = "";
  roles: Roles[] = [
    {value: Role.Admin},
    {value: Role.Empleado},
    {value: Role.Investigador},
    {value: Role.Proveedor}
  ];

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.user.nombres="";
    this.user.apellidos="";
    this.user.rol="";
    this.user.email="";
    this.user.lugarTrabajo="";
    this.user.fechaNacimiento="";
    this.user.numeroContacto=0;
  }
  
  agregarUsuario(){
    if(this.user.rol == ""){
      window.alert("No ha asignado un rol");
      return;
    }
    this.firestoreService.addUser(this.user, this.userPassword);
    this.router.navigate(['/']);
  }
}
