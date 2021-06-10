import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loggin-form',
  templateUrl: './loggin-form.component.html',
  styleUrls: ['./loggin-form.component.css']
})
export class LogginFormComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      usernameOrEmail: new FormControl(""),
      password: new FormControl("")
    })
  }

  onSubmit(){
    alert(this.form.value);
  }

}
