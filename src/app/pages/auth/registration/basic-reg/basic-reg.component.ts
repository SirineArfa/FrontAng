import { Component, OnInit } from '@angular/core';
import { User } from '../../../../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../../registration.service';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  user= new User();
  msg='';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.msg="Registration successful";
      },
      error=> {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
