import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './security/login/login.component';
import { RegistroComponent } from './gestionUsuarios/registro/registro.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,
MatSelectModule, MatDividerModule, MatCheckboxModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './gestionUsuarios/perfil/perfil.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaUsuariosComponent } from './gestionUsuarios/lista-usuarios/lista-usuarios.component';
import { ListaIncidentesComponent } from './incidentes/lista-incidentes/lista-incidentes.component';
import { InfoIncidenteComponent } from './incidentes/info-incidente/info-incidente.component';
import { RegistroIncidentesComponent } from './incidentes/registro-incidentes/registro-incidentes.component';
import { RegistroLeccionesComponent } from './registro-lecciones/registro-lecciones.component';

// Web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBXQhM1GrcmdbVBHDQzWzhSaP8DgJs46Ac",
  authDomain: "authtest-f3f65.firebaseapp.com",
  databaseURL: "https://authtest-f3f65.firebaseio.com",
  projectId: "authtest-f3f65",
  storageBucket: "authtest-f3f65.appspot.com",
  messagingSenderId: "345824796423",
  appId: "1:345824796423:web:49f9e44c6c6dd6b0"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    PerfilComponent,
    TopBarComponent,
    ListaUsuariosComponent,
    ListaIncidentesComponent,
    InfoIncidenteComponent,
    RegistroIncidentesComponent,
    RegistroLeccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
    ScrollingModule,
    FormsModule,
    AngularFireModule.initializeApp(config), // Initialize Firebase
    AngularFireAuthModule, // auth
    AngularFirestoreModule, // firestore
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
