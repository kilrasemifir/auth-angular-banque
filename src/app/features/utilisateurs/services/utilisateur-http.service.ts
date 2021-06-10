import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/utilisateurs";

  findAll(){
    return this.http.get(this.baseUrl);
  }

  deleteById(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  save(body:Utilisateur){
    return this.http.post(this.baseUrl, body);
  }

  findByIdDetail(id:string){
    const url = `${this.baseUrl}/${id}/detail`;
    console.log(url);
    return this.http.get(url)
  }
}
