import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  snup = new FormGroup({
    name1: new FormControl(''),
    mail1: new FormControl(''),
    pw: new FormControl(''),
    pw1: new FormControl(''),
  });
  dta = [
    {
      label: 'email_address',
      lbldta: 'User E-Mail Id:',
      type: 'text',
      id: 'email_address',
      class1: 'form-control mail1',
      name: 'email-address',
      fcn: 'mail1',
    },
    {
      label: 'name',
      lbldta: 'User Name:',
      type: 'text',
      id: 'name',
      class1: 'form-control name',
      name: 'password',
      fcn: 'name1',
    },
    {
      label: 'password',
      lbldta: 'Password:',
      type: 'password',
      id: 'password',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw',
    },
    {
      label: 'password',
      lbldta: 'Confirm password:',
      type: 'password',
      id: 'password2',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw1',
    },
  ];
  constructor(public router: Router, public serv: LoginservService) {}
  ngOnInit(): void {}
  signup() {
    localStorage.setItem(
      JSON.stringify(this.snup.value.mail1),
      JSON.stringify(this.snup.value.pw)
    );
    this.serv.login = true;
    this.serv.user = JSON.stringify(this.snup.value.mail1).slice(1,6)+"....";
    this.router.navigate(['bus']);
  }
}

