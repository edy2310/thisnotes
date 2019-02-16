import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import {LoggedCookieService} from '../../_services/logged-cookie.service';

@Component({
  selector: 'app-create-announce',
  templateUrl: './create-announce.component.html',
  styleUrls: ['./create-announce.component.scss']
})
export class CreateAnnounceComponent implements OnInit {

  private readonly  elementaryGrades: number[] = [1,2,3,4,5,6];
  private readonly  HSGrades: number[] = [1,2,3];

  public grades: number[];
  public level:string;

  public selectGradeEnabled : boolean = false;

  constructor(private _cookieCheck:LoggedCookieService) { }

  ngOnInit() {
    // if(!this._cookieCheck.permitCookie())
    //   this._router.navigateByUrl("/login")
  }

  selectLevel(){
    console.log("calling");
    console.log(this.level);
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
