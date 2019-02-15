import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoggedCookieService} from '../_services/logged-cookie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private _router:Router, private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    // if(!this._cookieCheck.permitCookie())
    //   this._router.navigateByUrl("/login")
  }

  logout(){
    console.log("saliendo");
    this._router.navigateByUrl("login");
  }

}
