import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Classes/Student';
import { Router,ActivatedRoute } from '@angular/router';
import { AdmindashboardService } from "../Services/admindashboard.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {


  s_gr_no:number;
  s_roll_no:number;
  s_sname:string;
  s_fname:string;
  s_lname:string;
  s_gender:string;
  s_dob:Date;
  s_email:string;
  s_address:string;
  s_class:number;
  s_div:string;
  s_contactno:number;
  s_category:string;
  s_bloodgroup:string;
  s_classteacher:string;
  // s_username:string="S"+this.s_gr_no;
  // s_password:string="S"+this.s_class+this.s_div+this.s_gr_no;
  s_username:string;
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

matcher = new MyErrorStateMatcher();

onChange(value)
{
  this.selectedFile=<File>value.target.files[0];
}
  constructor(private _ser:AdmindashboardService,private _aroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.s_gr_no=this._aroute.snapshot.params['id'];
    this._ser.getStudentBygrno(this.s_gr_no).subscribe(
      (data:Student[])=>{
        this.s_roll_no=data[0].s_roll_no;
        this.s_sname=data[0].s_sname;
        this.s_fname=data[0].s_fname;
        this.s_lname=data[0].s_lname;
        this.s_gender=data[0].s_gender;
        this.s_dob=data[0].s_dob;
        this.s_email=data[0].s_email;
        this.s_address=data[0].s_address;
        this.s_class=data[0].s_class;
        this.s_div=data[0].s_div;
        this.s_contactno=data[0].s_contactno;
        this.s_category=data[0].s_category;
        this.s_bloodgroup=data[0].s_bloodgroup;
        this.s_classteacher=data[0].s_classteacher;
        this.s_username=data[0].s_username;
        this.s_password=data[0].s_password;
        this.s_profilepic=data[0].s_profilepic;
      }
    );

  }

  onupdate()
  {
 this._ser.updateStudent(new Student(this.s_gr_no,this.s_roll_no,this.s_sname,this.s_fname,this.s_lname,this.s_gender,this.s_dob,this.s_email,this.s_address,this.s_class,this.s_div,this.s_contactno,this.s_category,this.s_bloodgroup,this.s_classteacher,this.s_username,this.s_password,this.s_profilepic)).subscribe(
        (data:any)=>{
      console.log(data);
      alert('updated Successfully!!!');
      this._route.navigate(['/studentDisplay']);
  });
}

}
