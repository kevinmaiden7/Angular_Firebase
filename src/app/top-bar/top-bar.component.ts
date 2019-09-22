import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  title = 'SGI';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  get isAuthenticated():boolean {
    return (this.authService.authenticated);
  }

  get isAdmin() {
    return (this.isAuthenticated && 
      this.authService.getCurrentUserRole === Role.Admin);
  }

  logout(){
    this.authService.logOut().then(res => {
      this.logoutSuccess();
    }).catch(e => console.log(e.message));
  }

  logoutSuccess(){
    localStorage.setItem("uid", null);
    localStorage.setItem("rol", null);
    localStorage.setItem("email", null);
    localStorage.setItem("authenticated", "false");
    window.alert("Se cerró la sesión");
  }

}
