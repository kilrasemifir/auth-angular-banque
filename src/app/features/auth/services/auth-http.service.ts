import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../../utilisateurs/models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private baseUrl:string = "http://localhost:8080/auth";
  constructor(private http:HttpClient) { }

  public connexion(connexionDTO:any){
    return this.http.post(`${this.baseUrl}/connexion`, connexionDTO, {responseType: "text"}); 
  }
}
