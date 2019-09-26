import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-registro-incidentes',
  templateUrl: './registro-incidentes.component.html',
  styleUrls: ['./registro-incidentes.component.css']
})
export class RegistroIncidentesComponent implements OnInit {

  incidente: any = {};
  investigadores: Array<any> = [];
  comentarios: Array<any> = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.incidente.autor = this.authService.getCurrentUserUID;
  }

  agregarInvestigador(uid){
    this.investigadores.push(uid);
    window.alert("Se agregó un nuevo investigador");
  }

  agregarComentario(comentario){
    this.comentarios.push(comentario);
    window.alert("Se agregó un nuevo comentario");
  }

  save(){
    this.incidente.investigadores = this.investigadores;
    this.incidente.comentarios = this.comentarios;
    this.apiService.saveIncidente(this.incidente).subscribe(result => {
      window.alert("Se agregó el nuevo reporte de incidente");
      this.router.navigate(["/"]);
    }, error => window.alert(error));
  }

}
