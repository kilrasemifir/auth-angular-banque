import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/Utilisateur';
import { UtilisateurHttpService } from '../../services/utilisateur-http.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  utilisateurs:Utilisateur[];
  constructor(private service:UtilisateurHttpService, private router: Router) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((data:Utilisateur[])=>this.utilisateurs=data, console.error);
  }

  onSupress(utiliateur:Utilisateur){
    this.service.deleteById(utiliateur.id).subscribe(()=>{
      this.utilisateurs = this.utilisateurs.filter(user=>user.id!==utiliateur.id);
    }) 
  }

  onDetail(utilisateur:Utilisateur){
    this.router.navigate(["utilisateur",utilisateur.id])
  }  

}
