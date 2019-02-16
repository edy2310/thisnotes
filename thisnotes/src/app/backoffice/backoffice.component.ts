import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedCookieService} from '../_services/logged-cookie.service';
import axios from 'axios';
import qs from 'qs';

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

  public async login(e){
    console.log(e.value);
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let response = await axios.post("http://localhost:8080/login", dataToSend, {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Access-Control-Allow-Origin': '*',
      }
      });
      console.log(response.data);
  }

}
