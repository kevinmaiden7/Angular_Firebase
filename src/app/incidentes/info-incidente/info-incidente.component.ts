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
  formatoOriginalIncidente: any = {};
  incidenteId = "";
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.incidenteId = params['id'];
      if (this.incidenteId){
        this.apiService.getInicidenteById(this.incidenteId).subscribe((data: any) => {
          if (data){
            this.incidente = data;
            this.getCompleteName(data.autor, 'autor', -1);
            this.getCompleteName(data.responsable, 'responsable', -1);
            var i = 0;
            for(let i = 0; i < data.investigadores.length; i++)
              this.getCompleteName(data.investigadores[i], 'investigador', i);
          }
        });
        this.apiService.getInicidenteById(this.incidenteId).subscribe((data: any) => {
          if (data){
            this.formatoOriginalIncidente = data;
          }
        });
      }
    });
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

  update(){
    this.formatoOriginalIncidente.estado = this.incidente.estado;
    this.formatoOriginalIncidente.descripcion = this.incidente.descripcion;
    this.formatoOriginalIncidente.impacto = this.incidente.impacto;
    
    this.apiService.updateIncidente(this.formatoOriginalIncidente, this.incidenteId).subscribe(result => {
      window.alert("Se actualizó el reporte de incidente");
      this.router.navigate(["/"]);
    },error => window.alert(error));
  }

  agregarComentario(comentario){
    this.formatoOriginalIncidente.comentarios.push(comentario);
    window.alert("Se agregó un nuevo comentario a la cola para ser reportado");
  }

}
