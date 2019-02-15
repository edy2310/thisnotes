import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoggedCookieService {

  private loggedCookie:boolean;

  constructor(private _cookies:CookieService) { }

  permitCookie():boolean{
    this.loggedCookie = this._cookies.check("permit");
    return this.loggedCookie;
  }
}
