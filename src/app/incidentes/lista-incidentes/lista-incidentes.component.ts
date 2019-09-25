import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../security/models';

@Component({
  selector: 'app-lista-incidentes',
  templateUrl: './lista-incidentes.component.html',
  styleUrls: ['./lista-incidentes.component.css']
})
export class ListaIncidentesComponent implements OnInit {

  incidentes: Array<any>;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  // Los guards garantizan que este componente siempre será accedido por un usuario registrado
  ngOnInit() {
    this.apiService.getIncidentes().subscribe(data => {
      this.incidentes = data;
      console.log(this.incidentes);
    });
  }

  // Si es admin, mostrar todos los incidentes reportados
  get isAdmin(){
    return (this.authService.getCurrentUserRole == Role.Admin);
  }

  get currentUserId(){
    return (this.authService.getCurrentUserUID);
  }

}
