import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from './../../services/auth.service';
import { FirestoreService } from './../../services/firestore.service';
import { Role } from '../../security/models'

@Component({
  selector: 'app-registro-incidentes',
  templateUrl: './registro-incidentes.component.html',
  styleUrls: ['./registro-incidentes.component.css']
})
export class RegistroIncidentesComponent implements OnInit {

  incidente: any = {};
  
  investigadores: Array<any> = [];
  investigadoresUID: Array<any> = [];
  invSeleccionados: Array<any> = [];
  invSeleccionadosUID: Array<any> = [];

  empleados: Array<any> = [];
  empleadosUID: Array<any> = [];
  responsable: any = {};

  comentarios: Array<any> = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    this.incidente.autor = this.authService.getCurrentUserUID;
    this.setInvestigadores();
    this.setOpcionesResponsable();
  }

  setInvestigadores(){
    this.firestore.fetchUsers().then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().rol == Role.Investigador){
          this.investigadoresUID.push(doc.id);
          this.investigadores.push(doc.data());
        }
      });
    })
    .catch(error => { console.log(error);
    });
  }

  setOpcionesResponsable(){
    this.firestore.fetchUsers().then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().rol == Role.Empleado){
          this.empleadosUID.push(doc.id);
          this.empleados.push(doc.data());
        }
      });
    })
    .catch(error => { console.log(error);
    });
  }

  agregarComentario(comentario){
    this.comentarios.push(comentario);
    window.alert("Se agregó un nuevo comentario");
  }

  save(){
    var index = this.empleados.indexOf(this.responsable);
    var uid = this.empleadosUID[index];
    this.incidente.responsable = uid;

    for (var invSeleccionado of this.invSeleccionados){
      index = this.investigadores.indexOf(invSeleccionado);
      uid = this.investigadoresUID[index];
      this.invSeleccionadosUID.push(uid);
    }
    this.incidente.investigadores = this.invSeleccionadosUID;
    this.incidente.comentarios = this.comentarios;
    this.apiService.saveIncidente(this.incidente).subscribe(result => {
      window.alert("Se agregó el nuevo reporte de incidente");
      this.router.navigate(["/"]);
    }, error => window.alert(error));
  }

}
