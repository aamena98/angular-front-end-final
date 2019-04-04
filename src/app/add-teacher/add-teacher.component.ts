import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { User } from "../../../Classes/User";
import { Teacher } from "../../../Classes/Teacher";
import { AdmindashboardService } from "../Services/admindashboard.service";
import { Router,ActivatedRoute } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {


   t_name:string;
   t_address:string;
   t_email:string;
   t_qualification:string;
   t_profilepic:string;
   t_contactno:number;
   fk_u_id:number;
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
   matcher = new MyErrorStateMatcher();
  constructor(private _data:AdmindashboardService,private _route:Router) { }


  ngOnInit() {
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }

  onadd()
  {

    this.fk_u_id=this.user_id;

    this.user_type=this.user_type;

    const userfd=new FormData();
    console.log(this.user_id);
        console.log(this.user_password);
      console.log(this.user_type);

      this._data.AddUser(new User(this.user_id,this.user_password,this.user_type)).subscribe(
        (data:any)=>{
          console.log(data);

        const fd=new FormData();
        // fd.append('t_number',this.t_number.toString());
        fd.append('t_name',this.t_name);
        fd.append('t_address',this.t_address);
        fd.append('t_email',this.t_email);
        fd.append('t_qualification',this.t_qualification);
        fd.append('t_profilepic',this.selectedFile,this.selectedFile.name);
        fd.append('t_contactno',this.t_contactno.toString());
        fd.append('fk_u_id',this.fk_u_id.toString());
        fd.append('t_dob',this.t_dob.toString());
        fd.append('t_category',this.t_category);
        fd.append('t_gender',this.t_gender);


        this._data.AddTeacher(fd).subscribe(
          (data:any)=>{
            console.log(data);
            //alert("Congratulations!!! Student added");
            this._route.navigate(['/teacherDisplay']);
          });



       });


  }
}
