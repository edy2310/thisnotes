import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import {LoggedCookieService} from '../../_services/logged-cookie.service';
import qs from 'qs';
import axios from 'axios';

@Component({
  selector: 'app-create-announce',
  templateUrl: './create-announce.component.html',
  styleUrls: ['./create-announce.component.scss']
})
export class CreateAnnounceComponent implements OnInit {

  private readonly  elementaryGrades: number[] = [1,2,3,4,5,6];
  private readonly  HSGrades: number[] = [1,2,3];

  public dashboardAlertStyle:Object;
  public dashboardAlertMsg:string;
  public loading:boolean;

  public grades: number[];
  public level:string;

  public selectGradeEnabled : boolean = false;
  

  constructor(private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    // if(!this._cookieCheck.permitCookie())
    //   this._router.navigateByUrl("/login")
  }

  async create(e:any){
    this.loading = true;
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let response = await axios.post("http://localhost:8080/announcements/create", dataToSend, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
     }
    });
    this.loading = false;
    if(response.data){
      this.dashboardAlertMsg = "Announce saved";
      this.dashboardAlertStyle = {
        "opacity" : "1",
        "margin-top" :  "0",
        "background-color" : "#3378cc"
      }
      setTimeout(() => {
        this.dashboardAlertStyle ={
          "opacity" : "0",
          "margin-top" : "-4em"
        }
      }, 1500);
    }
    else{
      this.dashboardAlertMsg = "Problem saving announce";
      this.dashboardAlertStyle = {
        "opacity" : "1",
        "margin-top" :  "0",
        "background-color" : "red"
      }
      setTimeout(() => {
        this.dashboardAlertStyle ={
          "opacity" : "0",
          "margin-top" : "-4em"
        }
      }, 1500);
    }
    
  }

  selectLevel(){
    if(this.level == "all")
      this.selectGradeEnabled = true;
    else if(this.level == "elementary"){
      this.grades = this.elementaryGrades;
      this.selectGradeEnabled = false;
    }
    else{
      this.grades = this.HSGrades;
      this.selectGradeEnabled = false;
    }
  }

}
