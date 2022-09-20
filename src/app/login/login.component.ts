import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  lf = new FormGroup({
    name1: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
    ]),
    pw: new FormControl('', Validators.pattern('^[a-z][A-Z]@[1-9]$')),
  });
  val = true;
  val1 = [
    {
      for1: 'email_address',
      clslabel: 'col-md-4 col-form-label text-md-right',
      lbldta: 'E-Mail Address',
      type: 'text',
      id: 'email_address',
      inpclass: 'form-control mail1',
      name: 'email-address',
      indiv: 'col-md-6',
      fcn: 'name1',
    },
    {
      for1: 'password',
      clslabel: 'col-md-4 col-form-label text-md-right',
      lbldta: 'Password',
      type: 'password',
      id: 'password',
      inpclass: 'form-control mail1',
      name: 'password',
      indiv: 'col-md-6',
      fcn: 'pw',
    },
  ];
  constructor(public router: Router,public serv: LoginservService ) {}
  ngOnInit(): void {}
  test() {
    console.log('works');
    return true;
  }
  login() {
    console.log(this.lf.value);
    
    var v1 = localStorage.getItem(JSON.stringify(this.lf.value.name1));
    console.log(v1);
    if (v1 == JSON.stringify(this.lf.value.pw)) {
      console.log('valid');
     this.serv.login = true
         this.serv.user =
           JSON.stringify(this.lf.value.name1).slice(1, 6) + '....';
      this.router.navigate(['products']);
    }
    else {
      alert('password / email is wrong ')
      this.router.navigate(['login']);
    }
  }
}
