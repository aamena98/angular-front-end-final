import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from '../../../Classes/Student';
import { User } from 'Classes/User';
@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  studentgetaddurl:string='http://localhost:3000/students/';
  updateprofileurl:string='http://localhost:3000/profile/';
  adduserurl:string='http://localhost:3000/user/';
  teachergetaddurl:string='http://localhost:3000/teacher/';
viewStudents:string='http://localhost:3000/viewstuonadmin/';

  constructor(public _http:HttpClient) { }
  isLoggedIn(){
   // console.log(localStorage.getItem('user_id'));
    if(localStorage.getItem('user_id')!=''){
      return true;
    }
    return false;
  }
  viewClass()
  {
    return this._http.get(this.studentgetaddurl);
  }

  AddStudent(item:FormData){
  return this._http.post(this.studentgetaddurl,item);
  }

  AddTeacher(item:FormData){
    return this._http.post(this.teachergetaddurl,item);
    }

    getUser()
    {
       return this._http.get(this.adduserurl);
    }

    deleteUser(user_id:number)
    {
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.adduserurl+user_id,{headers:h});
    }
    updateUser(item:User)
    {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.adduserurl+item.user_id,body,{headers:h});
    }

  AddUser(item:User){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.adduserurl,body,{headers:h});
  }

  deleteStudent(fk_u_id:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.studentgetaddurl+fk_u_id,{headers:h});

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
    return this._http.put(this.studentgetaddurl+item.fk_u_id,body,{headers:h});
  }
  getStudentByUserId(fk_u_id:number)
  {
    return this._http.get(this.studentgetaddurl+fk_u_id);
  }
  updateProfilepic(item:FormData)
  {
    return this._http.post(this.updateprofileurl,item);
  }
  getStudentByUserIdforprofilepic(fk_u_id:number)
  {
    return this._http.get(this.updateprofileurl+fk_u_id);
  }
  viewStudentsOnAdmin(s_class:number,s_div:string)
  {
    return this._http.get(this.viewStudents+s_class+"/"+s_div);
  }
}
