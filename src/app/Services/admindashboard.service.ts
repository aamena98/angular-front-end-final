import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from '../../../Classes/Student';
@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  studentgetaddurl:string='http://localhost:3000/students/';

  constructor(public _http:HttpClient) { }

  viewClass()
  {
    return this._http.get(this.studentgetaddurl);
  }

  AddStudent(item:Student){
   let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.studentgetaddurl,x,{headers:h});
  }

}
