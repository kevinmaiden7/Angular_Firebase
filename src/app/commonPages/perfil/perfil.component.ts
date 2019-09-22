import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

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
    private firestoreService: FirestoreService
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

}
