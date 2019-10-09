import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registro-lecciones',
  templateUrl: './registro-lecciones.component.html',
  styleUrls: ['./registro-lecciones.component.css']
})
export class RegistroLeccionesComponent implements OnInit {

  leccion: any = {};

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  save(){
    this.apiService.saveLeccion(this.leccion).subscribe(result => {
      window.alert("Se agrego la nueva lección aprendida");
      this.router.navigate(["/"]);
    }, error => window.alert(error));
  }

}
