import { Component, OnInit } from '@angular/core';
import { NoticeServiceService } from "../Services/notice-service.service";
import { Notice } from 'Classes/Notice';
@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  constructor(private _data:NoticeServiceService) { }

  n_date:Date;
  n_title:string;
  n_description:string;

  ngOnInit() {
  }

  onadd()
  {
this._data.AddNotice(new Notice(this.n_date,this.n_title,this.n_description)).subscribe(
  (data:any)=>
  {
    console.log(data);
alert("Notice added successfully");
  }
);

  }
}
