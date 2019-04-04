import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { Student } from '../../../../Classes/Student';
import { StudentAttendanceService } from '../../Services/student-attendance.service';
import { StudentAttendance } from '../../../../Classes/Student_Attendance';

export interface PeriodicElement {
  s_roll_no: number;
  s_sname: string;
  s_fname: string;
}
const ELEMENT_DATA:PeriodicElement[]=[

];


@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {


  /*s_a_id:number;
  s_a_status:boolean;
   fk_s_number:number;
   s_a_date:Date;
   fk_class_id:number;
   fk_div_name:string;*/
  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
//s_arr:Student[];
  displayedColumns: string[] = ['select','s_roll_no','s_fname'];

@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;
/*
s_gr_no:number=9911;
s_roll_no:number=9911;
s_sname:string='abc';
s_fname:string='abc';
s_lname:string="abc";
s_class:number=6;
s_div:string="A";
fk_u_id:number=2018;
s_password:string;
s_profilepic:string;
selectedFile:File=null;
arr:Student[]=[];
gender_arr:string[]=['Male','Female'];
class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
div_arr:string[]=['A','B','C'];
category_arr:string[]=['General','SC','ST','OBC'];
bloodgroup_arr:string[]=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
teacher_arr:string[]=['sunita','vinita','minita','namita'];
minDate = new Date(1990, 0, 1);
maxDate = new Date(Date.now());
usertype_arr:string[]=['Parent','Teacher','Admin'];
s_user_type:string;
user_id:number=99;
user_password:string="stu99";
user_type:string="Parent";
array_len:number;
attendance:StudentAttendance[]=[];
*/
minDate = new Date(1990, 0, 1);
maxDate = new Date(Date.now());
s_a_id:number;
//s_a_status:boolean;
 fk_s_number:number;
 //s_a_date:Date;
 fk_class_id:number;
 fk_div_name:string;
//pageSizeOptions: number[] = [1,2,5];
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
update_attendance_arr:StudentAttendance[]=[];
u_fk_u_id:number;
u_a_status:boolean=false;
u_s_a_date:Date;
constructor(private _ser:StudentAttendanceService,private _route:Router) { }

  ngOnInit() {

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
/*
  getStudents()
  {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.getStudentByclassdiv(this.s_class,this.s_div).subscribe(
          (data:Student[])=>{
            console.log(data);
            this.s_arr=data;
            this.array_len=this.s_arr.length;
           //this.dataSource.data=this.s_arr;
          }
        );
  }
*/
  /*addAttendance(){
    console.log("in method");
    this.fk_class_id=this.s_class;
    this.fk_div_name=this.s_div;
    this.fk_s_number=this.s_roll_no;

  }*/

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select());
  }



  getStudents()
  {
        this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;

        this._ser.getStudentByclassdiv(this.s_class,this.s_div).subscribe(
          (data:Student[])=>{
            console.log(data);
            this.s_arr=data;
            this.array_len=this.s_arr.length;
            this.dataSource.data=this.s_arr;
            this.add();

          }
        );
}
update(row)
{
  this.u_fk_u_id=row.fk_u_id;
  console.log(this.u_fk_u_id);
 //this.update_attendance_arr[0]=[this.u_fk_u_id,this.u_a_status,this.u_s_a_date];
this.update_attendance_arr.push(new StudentAttendance(this.u_fk_u_id,this.u_a_status,this.u_s_a_date));
 console.log(row);
}
   add()
  {
    console.log("in add method");
    this.s_arr.forEach(element => {
      console.log(element.fk_u_id);
        this.fk_u_id_arr.push(element.fk_u_id);
        this.s_a_status.push(true);
        this.s_a_date_arr.push(this.s_a_date);
        this.u_s_a_date=this.s_a_date;
     });
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

  updateAttendance()
{
this._ser.updateAttendance(this.update_attendance_arr).subscribe(
  (data:any)=>
  {
    console.log(data);
    alert("Attendance Added Of Class"+this.s_class+" of divison "+this.s_div+" of date "+this.s_a_date);
    this._route.navigate(['/studentDisplay']);
  }
);
}
}
