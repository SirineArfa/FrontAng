import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { AppointementService } from '../../appointement.service';
import { Appointement } from '../../appointement';
@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.scss']
})
export class AppointementComponent implements OnInit {

  app= new Appointement();
  msg='';
  constructor(private _service : AppointementService,private _router : Router) { }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  takeApp(){
    this._service.saveAppFromRemote(this.app).subscribe(
      data =>{console.log("response received");
    this._router.navigate([''])},
      error => {console.log("exception occured");this.msg="Can't save the appointement please verify your input";}
    )
  }

  gotopaiement(){
    this._router.navigate(['paiement'])

  }
  gotodashboard(){
    this._router.navigate(['Home'])

  }

}
