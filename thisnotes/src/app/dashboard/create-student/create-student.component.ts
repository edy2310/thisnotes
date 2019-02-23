import { Component, OnInit } from '@angular/core';
import {LoggedCookieService} from '../../_services/logged-cookie.service';
import qs from 'qs';
import axios from 'axios';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  private readonly  elementaryGrades: number[] = [1,2,3,4,5,6];
  private readonly  HSGrades: number[] = [1,2,3];

  public grades: number[];
  public level:string;

  public dashboardAlertStyle:Object;
  public dashboardAlertMsg:string;
  public loading:boolean;

  constructor(private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    // if(!this._cookieCheck.permitCookie())
    //   this._router.navigateByUrl("/login")
  }

  async create(e:any){
    this.loading = true;
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let response = await axios.post("http://localhost:8080/student/create", dataToSend, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
     }
    });
    this.loading = false;
    if(response.data){
      this.dashboardAlertMsg = "Student saved";
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
      this.dashboardAlertMsg = "Problem saving student";
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
    if(this.level == "elementary")
      this.grades = this.elementaryGrades;
    else
      this.grades = this.HSGrades;
  }

}
