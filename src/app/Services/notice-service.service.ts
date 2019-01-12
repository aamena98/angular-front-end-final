import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Notice } from '../../../Classes/Notice';
@Injectable({
  providedIn: 'root'
})
export class NoticeServiceService {


  noticegetaddurl:string='http://localhost:3000/notice/';
  constructor(public _http:HttpClient) { }


  AddNotice(item:Notice){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.noticegetaddurl,body,{headers:h});
  }


}
