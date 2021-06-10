import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
  selector: 'app-loggin-form',
  templateUrl: './loggin-form.component.html',
  styleUrls: ['./loggin-form.component.css']
})
export class LogginFormComponent implements OnInit {

  form:FormGroup;

  constructor(private service:AuthHttpService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      usernameOrEmail: new FormControl(""),
      password: new FormControl("")
    })
  }

  onSubmit(){
    this.service.connexion(this.form.value).subscribe((utilisateurId:string)=>{
      localStorage.setItem("utilisateurId", utilisateurId);
      this.router.navigate(["utilisateur/resume"]);
    }, (err)=>{

    });
  }

}
