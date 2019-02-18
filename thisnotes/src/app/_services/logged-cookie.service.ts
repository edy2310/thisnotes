import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoggedCookieService {

  private loggedCookie:boolean;

  constructor(private _cookies:CookieService) { }

  permitCookie():boolean{
    this.loggedCookie = this._cookies.check("sessionToken");
    return this.loggedCookie;
  }

  createCookie(jwt:string):void{
    this._cookies.set("sessionToken", jwt, 2, "/");
  }

  deleteCookie():void{
    this._cookies.delete("sessionToken", "/");
  }
}