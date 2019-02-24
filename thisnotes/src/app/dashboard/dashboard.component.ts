import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoggedCookieService} from '../_services/logged-cookie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private _router:Router, private _cookies:LoggedCookieService) { }

  ngOnInit() {
    if(!this._cookies.permitCookie())
      this._router.navigateByUrl("/login")
  }

  logout(){
    this._cookies.deleteCookie();
    this._router.navigateByUrl("/login");
  }

}
