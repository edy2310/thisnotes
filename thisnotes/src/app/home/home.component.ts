import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios';
import qs from "qs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loginStyle:Object;
  public registerStyle:Object;
  public registerMsg:string;
  public loginMsg:string;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  showRegister(){
    this.loginStyle = {
      "opacity":"0",
      "margin-left": "5em",
      "position": "absolute"
    }
    this.registerStyle = {
      "opacity":"1",
      "margin-left": "0em",
      "position": ""
    }
  }

  showLogin(){
    this.loginStyle = {
      "opacity":"1",
      "margin-left": "0em",
      "display": "grid"
    }
    this.registerStyle = {
      "opacity":"0",
      "margin-left": "5em",
      "position": "absolute" 
    }
  }

  async register(e:any){
    this.registerMsg = "Checking Parent Key...";
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let resp = await axios.post("http://localhost:8080/registerParent", dataToSend);
    if(resp.data)
      this.registerMsg = "Parent successfully created";
    else
      this.registerMsg = "Error creating parent";
    setTimeout(() => {
      this.registerMsg = "";
    }, 1500);
  }

  async login (e:any){
    this.loginMsg = "Verifying credentials..."
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let resp = await axios.post("http://localhost:8080/loginParent", dataToSend);
    if(resp.data){
      this.loginMsg = "Welcome";
      setTimeout(() => {
        //this._router.navigateByUrl("/parent");
      }, 1500);
    }
    else{
      this.loginMsg = "Wrong credientials"
    }
  }

}
