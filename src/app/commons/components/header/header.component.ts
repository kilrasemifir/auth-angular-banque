import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authLabel:string="Loggin";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setAuthLabel();
  }

  private setAuthLabel() {
    if (localStorage.getItem("utilisateurId")) {
      this.authLabel = "Deconnexion";
    } else {
      this.authLabel = "Connexion";
    }
  }

  onConnect(){
    if (localStorage.getItem("utilisateurId")){
      localStorage.removeItem("utilisateurId");
      this.authLabel = "Connexion";
    }
    this.router.navigate(["loggin"]);
  }

}
