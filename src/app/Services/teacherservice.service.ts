import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Teacher } from '../../../Classes/Teacher';
import { User } from 'Classes/User';

@Injectable({
  providedIn: 'root'
})
export class TeacherserviceService {
  adduserurl:string='http://localhost:3000/user/';
  teachergetaddurl:string='http://localhost:3000/teacher/';
  updateteacherprofileurl:string='http://localhost:3000/tprofile/';

  constructor(public _http:HttpClient) { }

  viewTeacherList()
  {
    return this._http.get(this.teachergetaddurl);
  }

  AddTeacher(item:FormData){
    return this._http.post(this.teachergetaddurl,item);
    }

  AddUser(item:User){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.adduserurl,body,{headers:h});
  }

  deleteTeacher(fk_u_id:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.teachergetaddurl+fk_u_id,{headers:h});

  }
  deleteAll()
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.teachergetaddurl,{headers:h});
  }
  updateTeacher(item:Teacher)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.teachergetaddurl+item.fk_u_id,body,{headers:h});
  }
  getTeacherById(fk_u_id:number)
  {
    return this._http.get(this.teachergetaddurl+fk_u_id);
  }
  updateProfilepic(item:FormData)
  {
    return this._http.post(this.updateteacherprofileurl,item);
  }
  getTeacherByidforprofilepic(fk_u_id:number)
  {
    return this._http.get(this.teachergetaddurl+fk_u_id);
  }

}
