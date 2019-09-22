import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private email = "";

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.isAuthenticated)
      this.email = this.authService.getCurrentUserEmail;
    else 
      this.email = "";
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
