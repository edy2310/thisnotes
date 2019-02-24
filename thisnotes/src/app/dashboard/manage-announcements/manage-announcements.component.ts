import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';

@Component({
  selector: 'app-manage-announcements',
  templateUrl: './manage-announcements.component.html',
  styleUrls: ['./manage-announcements.component.scss']
})
export class ManageAnnouncementsComponent implements OnInit {

  public allAnnouncments:Object[];
  public loading:boolean;
  public loadingUpdate:boolean;

  public announceToEditId:string;
  public announceToEditTitle:string;
  public announceToEditContent:string;
  public announceToEditLevel:string;
  public announceToEditGrade:string;
  public modalStyle:Object;

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.reqData();
  }

  async reqData(){
    let resp = await axios.post("http://localhost:8080/announcements/getall");
    this.allAnnouncments = resp.data;
    this.loading = false;
  }

  async update(){
    this.loadingUpdate = true;
    let data = {
      "id": this.announceToEditId,
      "title": this.announceToEditTitle,
      "content": this.announceToEditContent,
      "level": this.announceToEditLevel,
      "grade": this.announceToEditGrade
    }
    let dataToSend = qs.stringify(data);
    let resp = await axios.put("http://localhost:8080/announcements/update/" , dataToSend);
    this.loadingUpdate = false;
    window.location.reload();
  }

  async delete(id:any){
    let confirmDelete =  confirm("Are yo sure to delelte this announcement?");
    if(confirmDelete){
      let link:string = "http://localhost:8080/announcements/delete/" + id;
      let resp = await axios.delete(link);
      window.location.reload();
    }
  }

  updateModal(announce:any){
    this.announceToEditId = announce.id;
    this.announceToEditTitle = announce.title;
    this.announceToEditContent = announce.content;
    this.announceToEditLevel = announce.level;
    this.announceToEditGrade = announce.grade;
    this.modalStyle = {
      "top" : "20%",
      "opacity" : "1",
      "z-index" : "1"
    }
  }

  closeModal(){
    this.modalStyle = {
      "top" : "10%",
      "opacity" : "0",
      "z-index" : "-1"
    }
  }

}
