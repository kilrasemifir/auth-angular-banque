import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  utilisateurId:string;
  constructor() { }

  ngOnInit(): void {
    this.utilisateurId = localStorage.getItem("utilisateurId");
  }

}
