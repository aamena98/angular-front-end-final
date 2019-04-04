import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentAttendance } from '../../../Classes/Student_Attendance';

@Injectable({
  providedIn: 'root'
})
export class StudentAttendanceService {

  addgetstudentAttendanceurl:string='http://localhost:3000/s_attendance/';
  constructor(public _http:HttpClient) { }


  AddAttendance(item)
{
  //console.log(item);
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.addgetstudentAttendanceurl,body,{headers:h});

}
getStudentByclassdiv(class_no:number,div_name:string)
{
  return this._http.get(this.addgetstudentAttendanceurl+class_no+"/"+div_name);
}
getStudentAttendance()
{
  return this._http.get(this.addgetstudentAttendanceurl);
}
updateAttendance(item)
{
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.put(this.addgetstudentAttendanceurl,body,{headers:h});


}
}
