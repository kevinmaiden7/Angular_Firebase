import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegistroComponent } from './gestionUsuarios/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './gestionUsuarios/perfil/perfil.component';
import { ListaUsuariosComponent } from './gestionUsuarios/lista-usuarios/lista-usuarios.component';
import { ListaIncidentesComponent } from './incidentes/lista-incidentes/lista-incidentes.component';
import { InfoIncidenteComponent } from './incidentes/info-incidente/info-incidente.component';

import { AuthGuard } from './security/guards/auth.guard';
import { Role } from './security/models'

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'perfil/:uid',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'lista-incidentes',
    component: ListaIncidentesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'incidente/:id',
    component: InfoIncidenteComponent,
    canActivate: [AuthGuard]
  },

  // cualquier otro caso redireccionar a inicio
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
