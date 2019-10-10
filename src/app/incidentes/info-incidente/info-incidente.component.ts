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
            this.getCompleteName(data.autor, 'autor', -1);
            this.getCompleteName(data.responsable, 'responsable', -1);
            var i = 0;
            for(let i = 0; i < data.investigadores.length; i++)
              this.getCompleteName(data.investigadores[i], 'investigador', i);
          }
        });
      }
    });
  }

  update(){
    console.log("update: TODO");
  }

  getCompleteName(uid, field, index) {
    this.firestore.fetchUser(uid).then(doc => {
      const userData = doc.data();
      const name = userData.nombres + ' ' + userData.apellidos;
      if (field == 'autor')
        this.incidente.autor = name;
      else if (field == 'responsable')
        this.incidente.responsable = name;
      else if (field == 'investigador')
        this.incidente.investigadores[index] = name;
    });
  }

}
