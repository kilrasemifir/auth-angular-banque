import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/Utilisateur';

@Component({
  selector: 'app-utilisateur-profile',
  templateUrl: './utilisateur-profile.component.html',
  styleUrls: ['./utilisateur-profile.component.css']
})
export class UtilisateurProfileComponent implements OnInit {

  @Input() utilisateur:Utilisateur;
  
  constructor() { }

  ngOnInit(): void {
  }

}
