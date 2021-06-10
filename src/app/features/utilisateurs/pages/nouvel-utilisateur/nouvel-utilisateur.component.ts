import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurHttpService } from '../../services/utilisateur-http.service';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit {

  form:FormGroup;

  constructor(private service: UtilisateurHttpService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      email:new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
  }

  onSubmit(){
    if(this.form.valid)
      this.service.save(this.form.value).subscribe(()=>{
        this.router.navigate(["utilisateurs"])
      })
    else
      alert("Le formulaire n'est pas valide")
  }

}
