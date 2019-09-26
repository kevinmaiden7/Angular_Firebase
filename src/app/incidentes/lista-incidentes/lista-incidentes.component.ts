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
    const currentRole = this.authService.getCurrentUserRole;
    // Página accedida por un admin: Se muestran todos los incidentes
    if (currentRole == Role.Admin){
        this.apiService.getIncidentes().subscribe(data => {
        this.incidentes = data;
      });
    }
    // Página accedida por un empleado o un proveedor: Se muestran los incidentes
    // que este usuario ha reportado
    else if (currentRole == Role.Empleado || currentRole == Role.Proveedor){
        const currentUserUID = this.authService.getCurrentUserUID;
        this.apiService.getIncidentesByAutor(currentUserUID).subscribe(data => {
          this.incidentes = data;
      });
    }
  }

}
