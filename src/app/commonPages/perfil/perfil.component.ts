import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  sub: Subscription;
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const uid = params['uid'];
      this.firestoreService.fetchUser(uid).then(doc => {
        var userData = doc.data();
        this.user.nombres = userData.nombres;
        this.user.apellidos = userData.apellidos;
        this.user.correo = userData.email;
        this.user.rol = userData.rol;
      });
    });
  }

  logout(){
    this.authService.logOut().then(res => {
      this.salir();
    }).catch(e => console.log(e.message));
  }

  salir(){
    window.alert("Se cerró la sesión");
    this.router.navigate(['/login']);
  }

}
