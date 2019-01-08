import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

   t_number:string;
   t_name:string;
   t_address:string;
   t_email:string;
   t_qualification:string;
   t_profilepic:string;
   t_contactno:number;
   fk_u_id:string;
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

  constructor() { }


  ngOnInit() {
  }
  onChange(value)
  {
    //this.selectedFile=<File>value.target.files[0];
  }

  onadd()
  {}
}
