import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
 
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  users: Array<any> = [];
  usersUID: Array<any> = [];

  constructor(
    private router: Router,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    this.firestore.fetchUsers().then(snapshot => {
      snapshot.forEach(doc => {
        this.usersUID.push(doc.id);
        this.users.push(doc.data());
      });
    })
    .catch(error => { console.log(error);
    });
  }

  goToProfile(user){
    const index = this.users.indexOf(user);
    const uid = this.usersUID[index];
    this.router.navigate(['/perfil/' + uid]);
  }

}
