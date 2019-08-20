import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBXQhM1GrcmdbVBHDQzWzhSaP8DgJs46Ac",
  authDomain: "authtest-f3f65.firebaseapp.com",
  databaseURL: "https://authtest-f3f65.firebaseio.com",
  projectId: "authtest-f3f65",
  storageBucket: "",
  messagingSenderId: "345824796423",
  appId: "1:345824796423:web:49f9e44c6c6dd6b0"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    FormsModule,
    AngularFireModule.initializeApp(config), // Initialize Firebase
    AngularFireAuthModule //auth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
