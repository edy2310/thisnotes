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

  public pcStyle:Object;
  public permissionCardContent:String;

  constructor(private _router:Router, private _cookies:LoggedCookieService) { }

  ngOnInit() {
    if(this._cookies.permitCookie())
      this._router.navigateByUrl("/dashboard");
  }

  public async login(e){
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let response = await axios.post("http://localhost:8080/login", dataToSend, {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Access-Control-Allow-Origin': '*',
      }
      });
      if(response.data.permission == "false"){
        this.permissionCardContent = "Permission Denied ";
        this.togglePermissionCard();  
      }
      else if(response.data.permission == "true"){
        this.permissionCardContent = "Welcome";
        this.togglePermissionCard();
        this._cookies.createCookie(response.data.jwt);
        setTimeout(() => {
          this._router.navigateByUrl("/dashboard");
        }, 1000);
      }
  }

  private togglePermissionCard(){
    this.pcStyle = {
      "margin-top" : "2em",
      "opacity" : "1",
    }  
    setTimeout(() => {
      this.pcStyle = {
        "margin-top" : "0", 
      "opacity" : "0",
      }
    }, 1700);
  }

}
