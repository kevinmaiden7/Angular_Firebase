import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../security/models';
import { NgForm } from '@angular/forms';

export interface Roles {
  value: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  sub: Subscription;
  user: any = {};
  roles: Roles[] = [
    {value: Role.Admin},
    {value: Role.Empleado},
    {value: Role.Investigador},
    {value: Role.Proveedor}
  ];
  private uid = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uid = params['uid'];
      if (!this.enableToEnter){
        window.alert("No puedes entrar a este perfil");
        this.router.navigate(['/']);
      }
      this.firestoreService.fetchUser(this.uid).then(doc => {
        var userData = doc.data();
        this.user.nombres = userData.nombres;
        this.user.apellidos = userData.apellidos;
        this.user.correo = userData.email;
        this.user.rol = userData.rol;
        this.user.lugarTrabajo = userData.lugarTrabajo;
        this.user.fechaNacimiento = userData.fechaNacimiento;
        this.user.numeroContacto = userData.numeroContacto;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get isAdmin() {
    return (this.authService.getCurrentUserRole === Role.Admin);
  }

  /* Verificar si un usuario esta accediendo a su propio perfil.
  Siempre es permitido el ingreso a a los admins.
  AuthGuards garantiza que solo ingresen usuarios autenticados */
  get enableToEnter(){
    return (this.isAdmin || this.authService.getCurrentUserUID == this.uid);
  }

  get enableToModify() {
    const currentRole = this.authService.getCurrentUserRole;
    return (currentRole == Role.Admin || currentRole == Role.Empleado);
  }

  update(){
    this.firestoreService.updateUser(this.uid, this.user);
    this.router.navigate(['/']);
  }

}
