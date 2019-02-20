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

  constructor(private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    // if(!this._cookieCheck.permitCookie())
    //   this._router.navigateByUrl("/login")
  }

  async create(e:any){
    let data = e.value;
    let dataToSend = qs.stringify(data);
    let response = await axios.post("http://localhost:8080/student/create", dataToSend, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
     }
    });
    console.log(response);

  }

  selectLevel(){
    if(this.level == "elementary")
      this.grades = this.elementaryGrades;
    else
      this.grades = this.HSGrades;
  }

}
