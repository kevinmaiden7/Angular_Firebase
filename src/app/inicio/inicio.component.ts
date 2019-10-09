import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  email = "";
  lecciones: Array<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    if (this.isAuthenticated)
      this.email = this.authService.getCurrentUserEmail;
    else 
      this.email = "";
    
    this.apiService.getLecciones().subscribe(data => {
      this.lecciones = data;
    });
  }

  get isAuthenticated():boolean {
    return (this.authService.authenticated);
  }

  goToProfile() {
    if (!this.isAuthenticated)
      window.alert("No está autenticado");
    else{
      const uid = this.authService.getCurrentUserUID;
      this.router.navigate(['/perfil/' + uid]);
    }
  }
  
}
