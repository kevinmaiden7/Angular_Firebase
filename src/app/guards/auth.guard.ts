import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.authenticated){
            // check if route is restricted by role
            if (route.data.roles && 
                route.data.roles.indexOf(this.authService.getCurrentUserRole) === -1){
                // rol no autorizado, redirigir a inicio
                this.router.navigate(['/']);
                return false;
            }
            // rol autorizado, retornar true
            return true;
        }
        // usuario no autenticado, redirigir a la página de login
        this.router.navigate(['/login']);
        return false;
    }
}