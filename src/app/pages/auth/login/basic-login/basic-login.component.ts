import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../../registration.service';
import { User } from '../../../../user';


@Component({
  selector: 'app-basic-Login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  user= new User();
  msg='';
  constructor(private _service : RegistrationService,private _router : Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("response received");
    this._router.navigate([''])},
      error => {console.log("exception occured");this.msg="Bad credentials, please enter valid email id and password";}
    )
  }

  gotoregistration(){
    this._router.navigate(['/authentication/registration'])
  }
}
