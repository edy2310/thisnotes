import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-manage-announcements',
  templateUrl: './manage-announcements.component.html',
  styleUrls: ['./manage-announcements.component.scss']
})
export class ManageAnnouncementsComponent implements OnInit {

  public allAnnouncments:Object[];
  public loading:boolean;

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

  async update(id:any){
    let link:string = "http://localhost:8080/announcements/update/" + id;
    let resp = await axios.put(link);
    console.log(link);
  }

  async delete(id:any){
    let confirmDelete =  confirm("Are yo sure to delelte this announcement?");
    if(confirmDelete){
      let link:string = "http://localhost:8080/announcements/delete/" + id;
      let resp = await axios.delete(link);
      window.location.reload();
    }
    
  }

}
