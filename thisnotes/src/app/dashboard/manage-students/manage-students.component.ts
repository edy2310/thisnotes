import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {

  public allStudents:Object[];
  public loading:boolean;
  public loadingUpdate:boolean;

  public studentToEditId:string;
  public studentToEditFirstName:string;
  public studentToEditSecondName:string;
  public studentToEditLevel:string;
  public studentToEditGrade:string;
  public modalStyle:Object;

  constructor() {}

  ngOnInit() {
    this.loading = true;
    this.reqData();
  }

  async reqData(){
    let resp = await axios.post("http://localhost:8080/student/getall");
    this.allStudents = resp.data;
    this.loading = false;
  }

  async delete(id:any){
    let confirmDelete =  confirm("Are yo sure to delelte this student?");
    if(confirmDelete){
      let link:string = "http://localhost:8080/student/delete/" + id;
      let resp = await axios.delete(link);
      window.location.reload();
    }
  }

  updateModal(student:any){
    this.studentToEditId = student.id;
    this.studentToEditFirstName = student.firstName;
    this.studentToEditSecondName = student.lastName;
    this.studentToEditLevel = student.level;
    this.studentToEditGrade = student.grade;
    this.modalStyle = {
      "top" : "20%",
      "opacity" : "1",
      "z-index" : "1"
    }
  }

  async update(){
    this.loadingUpdate = true;
    let data = {
      "id": this.studentToEditId,
      "firstName": this.studentToEditFirstName,
      "secondName": this.studentToEditSecondName,
      "level": this.studentToEditLevel,
      "grade": this.studentToEditGrade
    }
    let dataToSend = qs.stringify(data);
    let resp = await axios.put("http://localhost:8080/student/update/" , dataToSend);
    this.loadingUpdate = false;
    window.location.reload();
  }
}