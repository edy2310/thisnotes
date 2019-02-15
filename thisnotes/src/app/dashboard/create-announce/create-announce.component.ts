import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

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

  constructor() { }

  ngOnInit() {
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
