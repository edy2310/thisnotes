import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  create(e:any){
    console.log(e.value);
  }

  selectLevel(){
    console.log("calling");
    console.log(this.level);
    if(this.level == "elementary")
      this.grades = this.elementaryGrades;
    else
      this.grades = this.HSGrades;
  }

}
