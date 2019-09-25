import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://sgi-web-api.herokuapp.com
  public API = '//sgi-web-api.herokuapp.com';
  //public API = '//localhost:3000';
  public INCIDENTES_ENDPOINT = '/incidentes';
  
  constructor(
    private http: HttpClient
  ) { }

  getIncidentes(): Observable<any> {
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT);
  }

  getInicidenteById(id: string){
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT + "/" + id);
  }

}
