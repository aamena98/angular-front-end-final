import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { Student } from '../../../../Classes/Student';
import { StudentAttendanceService } from '../../Services/student-attendance.service';
import { StudentAttendance } from '../../../../Classes/Student_Attendance';

export interface PeriodicElement {
  s_profilepic: string;
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


  s_a_id:number;
  s_a_status:boolean;
   fk_s_number:number;
   s_a_date:Date;
   fk_class_id:number;
   fk_div_name:string;
  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
s_arr:Student[];
  displayedColumns: string[] = ['select','s_profilepic','s_roll_no','s_sname','s_fname'];

@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;

s_gr_no:number=9911;
s_roll_no:number=9911;
s_sname:string='abc';
s_fname:string='abc';
s_lname:string="abc";
s_gender:string="Female";
s_dob:Date;
s_email:string="a@gmail.com";
s_address:string="paldi";
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

  getStudents()
  {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.getStudentByclassdiv(this.s_class,this.s_div).subscribe(
          (data:Student[])=>{
            console.log(data);
            this.s_arr=data;
           this.dataSource.data=this.s_arr;
          }
        );
  }

  addAttendance(){
    this.fk_class_id=this.s_class;
    this.fk_div_name=this.s_div;
    this.fk_s_number=this.s_roll_no;
    this._ser.AddAttendance(new StudentAttendance(this.s_a_status,this.fk_s_number,this.s_a_date,this.fk_class_id,this.fk_div_name,this.s_gr_no)).subscribe(
      (data:StudentAttendance[])=>{
        console.log(data);
       //this.dataSource.data=this.s_arr;
      }
    );
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select());
  }


}
