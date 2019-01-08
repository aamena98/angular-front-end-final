import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from '../../../Classes/Student';
@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  studentgetaddurl:string='http://localhost:3000/students/';
  updateprofileurl:string='http://localhost:3000/profile/';
  adduserurl:string='http://localhost:3000/user/';
  adduserurl1:string='http://localhost:3000/user1/';

  constructor(public _http:HttpClient) { }

  viewClass()
  {
    return this._http.get(this.studentgetaddurl);
  }

  AddStudent(item:FormData){
  //   console.log(item);
  //  let x=JSON.stringify(item);
  //   let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.studentgetaddurl,item);
  }

  AddUser(item:FormData){

    console.log("service id"+item.get('user_id'));
    console.log("service ass"+item.get('user_password'));
    console.log("service type"+item.get('user_type'));
    return this._http.post(this.adduserurl1,item);
  }

  deleteStudent(s_roll_no:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.studentgetaddurl+s_roll_no,{headers:h});

  }
  deleteAll()
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.studentgetaddurl,{headers:h});

  }
  updateStudent(item:Student)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.studentgetaddurl+item.s_gr_no,body,{headers:h});
  }
  getStudentBygrno(s_gr_no)
  {
    return this._http.get(this.studentgetaddurl+s_gr_no);
  }
  updateProfilepic(item:FormData)
  {
    // let body=JSON.stringify(item);
    // let h=new HttpHeaders().set('Content-Type','application/json');
    // return this._http.post(this.updateprofileurl,body,{headers:h});
    return this._http.post(this.updateprofileurl,item);
  }
  getStudentBygrnoforprofilepic(s_gr_no)
  {
    return this._http.get(this.updateprofileurl+s_gr_no);
  }
}
