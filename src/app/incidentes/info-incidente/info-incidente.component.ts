import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-info-incidente',
  templateUrl: './info-incidente.component.html',
  styleUrls: ['./info-incidente.component.css']
})
export class InfoIncidenteComponent implements OnInit {

  incidente: any = {};
  sub: Subscription;
  //nombreAutor = "";
  //nombreResponsable = "";
  //nombresInvestigadores: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id){
        this.apiService.getInicidenteById(id).subscribe((data: any) => {
          if (data){
            this.incidente = data;
          }
        });
      }
    });
  }

  update(){
    console.log("update: TODO");
  }

  /*getCompleteName(uid) {
    this.firestore.fetchUser(uid).then(doc => {
      const userData = doc.data();
      return(userData.nombres + ' ' + userData.apellidos);
    });
  }*/

}
