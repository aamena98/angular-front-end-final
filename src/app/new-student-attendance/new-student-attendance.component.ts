import { Component, OnInit } from '@angular/core';
import { StudentAttendance } from '../../../Classes/Student_Attendance';
import { StudentAttendanceService } from '../Services/student-attendance.service';
import { Router } from '@angular/router';
import { Student } from '../../../Classes/Student';
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-new-student-attendance',
  templateUrl: './new-student-attendance.component.html',
  styleUrls: ['./new-student-attendance.component.css']
})
export class NewStudentAttendanceComponent implements OnInit {


  s_a_id:number;
  //s_a_status:boolean;
   fk_s_number:number;
   //s_a_date:Date;
   fk_class_id:number;
   fk_div_name:string;
  pageSizeOptions: number[] = [1,2,5];
s_arr:Student[]=[];
s_gr_no:number=9911;
s_roll_no:number=9911;
s_sname:string='abc';
s_fname:string='abc';
s_lname:string="abc";
s_class:number=6;
s_div:string="A";
//fk_u_id:number=2018;
s_password:string;
s_profilepic:string;
selectedFile:File=null;
arr:Student[]=[];
gender_arr:string[]=['Male','Female'];
class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
div_arr:string[]=['A','B','C'];
usertype_arr:string[]=['Parent','Teacher','Admin'];
s_user_type:string;
user_id:number=99;
user_password:string="stu99";
user_type:string="Parent";
array_len:number;
s_a_date:Date;
fk_u_id_arr:number[]=[];
s_a_status:boolean[]=[];
attendance:StudentAttendance[]=[];
s_a_date_arr:Date[]=[];
i:number;
j:number=0;

  constructor(private _ser:StudentAttendanceService,private _route:Router) { }

  ngOnInit() {
  }


  getStudents()
  {
        this._ser.getStudentByclassdiv(this.s_class,this.s_div).subscribe(
          (data:Student[])=>{
            console.log(data);
            this.s_arr=data;
            this.array_len=this.s_arr.length;
            this.add();
          }
        );

      }
   add()
  {
    console.log("in add method");
    this.s_arr.forEach(element => {
      console.log(element.fk_u_id);
        this.fk_u_id_arr.push(element.fk_u_id);
        this.s_a_status.push(true);
        this.s_a_date_arr.push(this.s_a_date);
     });
  //   console.log("in add");
  //   console.log(item.fk_u_id);
  //   this.fk_u_id_arr.push(item.fk_u_id);
  //   this.s_a_status.push(true);
  //   this.s_a_date_arr.push(this.s_a_date);
  this.addAttendance();
  }
  addAttendance()
{
  for(this.i=0;this.i<this.array_len;this.i++){

if(this.j<this.array_len)
{   this.attendance.push(new StudentAttendance(this.fk_u_id_arr[this.i],this.s_a_status[this.i],this.s_a_date_arr[this.i]));
   console.log(this.attendance);
  this.j=this.j+1;
  }
  }
  this._ser.AddAttendance(this.attendance).subscribe(
    (data:any)=>
    {
      console.log(data);
    }
  );
  }

}
