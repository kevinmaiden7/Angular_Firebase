import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //public API = "//localhost:3000";
  public API = '//sgi-web-api.herokuapp.com';
  public INCIDENTES_ENDPOINT = '/incidentes';
  public GESTION_INCIDENTES_ENDPOINT = '/gestion-incidentes';
  public LECCIONES_ENDPOINT = '/lecciones';
  
  constructor(
    private http: HttpClient
  ) { }

  // Incidentes

  getIncidentes(): Observable<any> {
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT);
  }

  getInicidenteById(id: string): Observable<any>{
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT + "/" + id);
  }

  saveIncidente(incidente: any): Observable<any>{
    let result: Observable<Object>;
    result = this.http.post(this.API + this.INCIDENTES_ENDPOINT, incidente);
    return result;
  }

  getIncidentesByAutor(uid: string): Observable<any> {
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT + '/autor/' + uid);
  }

  getIncidentesByInvestigador(uid: string): Observable<any> {
    return this.http.get(this.API + this.INCIDENTES_ENDPOINT + '/investigador/' + uid);
  }

  // Gestión de incidentes

  updateIncidente(incidente: any, id: string): Observable<any>{
    return this.http.put(this.API + this.GESTION_INCIDENTES_ENDPOINT + "/" + id, incidente);
  }

  // Lecciones

  getLecciones(): Observable<any> {
    return this.http.get(this.API + this.LECCIONES_ENDPOINT);
  }

  saveLeccion(leccion: any): Observable<any>{
    let result: Observable<Object>;
    result = this.http.post(this.API + this.LECCIONES_ENDPOINT, leccion);
    return result;
  }

}
