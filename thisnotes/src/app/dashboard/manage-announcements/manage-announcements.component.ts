import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-manage-announcements',
  templateUrl: './manage-announcements.component.html',
  styleUrls: ['./manage-announcements.component.scss']
})
export class ManageAnnouncementsComponent implements OnInit {

  public allAnnouncments:Object[];

  constructor() { }

  ngOnInit() {
    this.reqData();
  }

  async reqData(){
    let resp = await axios.post("http://localhost:8080/announcements/getall");
    this.allAnnouncments = resp.data;
  }

}
