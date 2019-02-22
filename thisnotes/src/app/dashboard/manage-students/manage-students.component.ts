import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {

  public allStudents:Object[];

  constructor() {}

  ngOnInit() {
    this.reqData();
  }

  async reqData(){
    let resp = await axios.post("http://localhost:8080/student/getall");
    this.allStudents = resp.data;
  }
}