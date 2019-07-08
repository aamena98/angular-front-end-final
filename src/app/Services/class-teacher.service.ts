import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { classTeacher } from '../../../Classes/classTeacher';

@Injectable({
  providedIn: 'root'
})
export class ClassTeacherService {
classTeacherurl:string='http://localhost:3000/classTeacher/';
classTeacherurl1:string='http://localhost:3000/classTeacher1/';
classTeacherurl2:string='http://localhost:3000/profileclassteacher/'
  constructor(public _http:HttpClient) { }
  getclassteacher()
  {
    return this._http.get(this.classTeacherurl);
  }

  getUserId(c_t_name:string)
{
  return this._http.get(this.classTeacherurl1+c_t_name);
}
  addclassTeacher(item:classTeacher){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.classTeacherurl,item);
    }


  deleteclassTeacher(fk_u_id:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.classTeacherurl+fk_u_id,{headers:h});

  }
  updateclassTeacher(item:classTeacher)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.classTeacherurl+item.fk_u_id,body,{headers:h});
  }
  getclassTeacherByUserId(fk_u_id:number)
  {
    return this._http.get(this.classTeacherurl+fk_u_id);
  }
  getprofilebyUserId(fk_u_id:number)
  {
    return this._http.get(this.classTeacherurl2+fk_u_id);
  }
}
