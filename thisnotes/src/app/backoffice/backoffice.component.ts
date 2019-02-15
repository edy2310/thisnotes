import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedCookieService} from '../_services/logged-cookie.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private _router:Router, private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    if(this._cookieCheck.permitCookie())
      this._router.navigateByUrl("/dashboard")
  }

  public login(e){
    console.log(e.value);
  }

}
