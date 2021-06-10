import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/Utilisateur';
import { UtilisateurHttpService } from '../../services/utilisateur-http.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  utilisateurId:string;
  utilisateur:Utilisateur;
  constructor(private service: UtilisateurHttpService) { }

  ngOnInit(): void {
    this.utilisateurId = localStorage.getItem("utilisateurId");
    this.service.findByIdDetail(this.utilisateurId).subscribe((utilisateur:Utilisateur)=>{
      this.utilisateur = utilisateur;
    })
  }

}
