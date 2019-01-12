import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Classes/Student';
import { Router,ActivatedRoute } from '@angular/router';
import { TeacherserviceService } from "../Services/teacherservice.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Teacher } from 'Classes/Teacher';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {


  t_number:string;
  t_name:string;
  t_address:string;
  t_email:string;
  t_qualification:string;
  t_profilepic:string;
  t_contactno:number;
  fk_u_id:number;
  t_password:string;
  t_subjectname:string;
  t_classteacher:number;
  t_classdiv:string;
  t_dob:Date;
  t_category:string;
  t_gender:string;

 gender_arr:string[]=['Male','Female'];
class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
div_arr:string[]=['A','B','C'];
category_arr:string[]=['General','SC','ST','OBC'];
bloodgroup_arr:string[]=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
teacher_arr:string[]=['sunita','vinita','minita','namita'];
minDate = new Date(1990, 0, 1);
maxDate = new Date(Date.now());
usertype_arr:string[]=['Parent','Teacher','Admin'];


 user_id:number;
 user_password:string;
 user_type:string;
 selectedFile:File=null;
 t_class:number;


matcher = new MyErrorStateMatcher();

onChange(value)
{
  this.selectedFile=<File>value.target.files[0];
}
  constructor(private _ser:TeacherserviceService,private _aroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.t_number=this._aroute.snapshot.params['id'];
    this._ser.getTeacherById(this.t_number).subscribe(
      (data:Teacher[])=>{
        this.t_number=data[0].t_number;
        this.t_name=data[0].t_name;
        this.t_gender=data[0].t_gender;
        this.t_dob=data[0].t_dob;
        this.t_email=data[0].t_email;
        this.t_qualification=data[0].t_qualification;
        this.t_address=data[0].t_address;
        this.t_class=data[0].t_class;
        this.t_classdiv=data[0].t_classdiv;
        this.t_contactno=data[0].t_contactno;
        this.t_password=data[0].t_password;
        this.fk_u_id=data[0].fk_u_id;
        this.t_category=data[0].t_category;
       this.t_profilepic=data[0].t_profilepic;
      }
    );
}


onupdate()
{
this._ser.updateTeacher(new Teacher(this.t_number,this.t_name,this.t_address,this.t_email,this.t_qualification,this.t_profilepic,this.t_contactno,this.fk_u_id,this.t_password,this.t_classdiv,this.t_class,this.t_dob,this.t_category,this.t_gender)).subscribe(
      (data:any)=>{
    console.log(data);
    alert('updated Successfully!!!');
    this._route.navigate(['/teacherDisplay']);
});
}

}
