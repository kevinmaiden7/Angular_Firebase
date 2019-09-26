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
  i = 0;
  comentarios: Array<any> = [];
  j = 0;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.incidente.autor = this.authService.getCurrentUserUID;
    this.incidente.investigadores = {};
    this.incidente.comentarios = {};
  }

  agregarInvestigador(uid){
    this.incidente.investigadores[this.i] = uid;
    this.i++;
    window.alert("Se agregó un nuevo investigador");
  }

  agregarComentario(comentario){
    this.incidente.comentarios[this.j] = comentario;
    this.j++;
    window.alert("Se agregó un nuevo comentario");
  }

  save(){
    this.apiService.saveIncidente(this.incidente).subscribe(result => {
      window.alert("Se agregó el nuevo reporte de incidente");
      this.router.navigate(["/"]);
    }, error => window.alert(error));
  }

}
