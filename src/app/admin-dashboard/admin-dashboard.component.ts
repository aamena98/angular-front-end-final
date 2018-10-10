import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Classes/Student';
import { AdmindashboardService } from "../Services/admindashboard.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


//import { Router,ActivatedRoute } from '@angular/router';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

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
minDate = new Date(1990, 0, 1);
maxDate = new Date(Date.now());
  constructor(private _data:AdmindashboardService) { }

  ngOnInit() {
  }
  // onChange(value)
  // {
  //   this.selectedFile=<File>value.target.files[0];
  // }

  onadd()
  {

    // const fd=new FormData();
    // fd.append('s_gr_no',this.s_gr_no.toString());
    // fd.append('s_roll_no',this.s_roll_no.toString());
    // fd.append('s_sname',this.s_sname);
    // fd.append('s_fname',this.s_fname);
    // fd.append('s_lname',this.s_lname);
    // fd.append('s_gender',this.s_gender);
    // fd.append('s_dob',this.s_dob.toString());
    // fd.append('s_email',this.s_email);
    // fd.append('s_address',this.s_address);
    // fd.append('s_class',this.s_class.toString());
    // fd.append('s_div',this.s_div);
    // fd.append('s_contactno',this.s_contactno.toString());
    // fd.append('s_category',this.s_category);
    // fd.append('s_bloodgroup',this.s_bloodgroup);
    // fd.append('s_classteacher',this.s_classteacher);
    // fd.append('s_username',this.s_username);
    // fd.append('s_password',this.s_password);
    // fd.append('s_profilepic',this.selectedFile,this.selectedFile.name);


    // this._data.AddStudent(fd).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //   }
    // );
   this._data.AddStudent(new Student(this.s_gr_no,this.s_roll_no,this.s_sname,this.s_fname,this.s_lname,
                       this.s_gender,this.s_dob,this.s_email,this.s_address,this.s_class,
                         this.s_div,this.s_contactno,this.s_category,this.s_bloodgroup,
                         this.s_classteacher,this.s_username,this.s_password,this.s_profilepic)).subscribe(
   (data:any)=>{
     console.log(data);
     alert("Added successfully");
  //   //   //this._route.navigate(['/']);

     }
   );

}

}




