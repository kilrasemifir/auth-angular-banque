import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from '../../models/Utilisateur';
import { UtilisateurHttpService } from '../../services/utilisateur-http.service';

@Component({
  selector: 'app-utilisateur-profile-page',
  templateUrl: './utilisateur-profile-page.component.html',
  styleUrls: ['./utilisateur-profile-page.component.css']
})
export class UtilisateurProfilePageComponent implements OnInit {
  utilisateur?:Utilisateur;

  constructor(private route: ActivatedRoute, private service:UtilisateurHttpService) {
    this.route.params.subscribe(params=>
      this.service.findByIdDetail(params.id).subscribe((utilisateur:any)=>
        this.utilisateur=utilisateur))
   }

  ngOnInit(): void {
  }

}
