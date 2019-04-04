import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Classes/Student';
import { User } from '../../../Classes/User';
import { AdmindashboardService } from "../Services/admindashboard.service";
import { LoginserviceService } from "../Services/loginservice.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';


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
  s_contactno:number=23994784;
  s_category:string="General";
  s_bloodgroup:string="A+";

  // s_username:string="S"+this.s_gr_no;
  // s_password:string="S"+this.s_class+this.s_div+this.s_gr_no;
  fk_u_id:number=2018;

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
user_arr:User[];
  user_id:number=99;
  user_password:string="stu99";
  user_type:string="Parent";
  constructor(private _data:AdmindashboardService) { }

  ngOnInit() {
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  addUser(){
    console.log("üser function called");

  }
  onadd()
  {
    this.fk_u_id=this.user_id;
    this.s_user_type=this.user_type;

    const userfd=new FormData();
    console.log(this.user_id);
        console.log(this.user_password);
      console.log(this.user_type);

      this._data.AddUser(new User(this.user_id,this.user_password,this.user_type)).subscribe(
        (data:any)=>{
          console.log(data);
          //this.user_arr.push(new User(this.user_id,this.user_password,this.user_type));


      // this._xyz.addStudent(new student(this.rno,this.sname,this.gen,this.mobno,this.scity,this.saction)).subscribe(
      //   (data:any)=>{
      //     console.log(data);
      //     this.arr.push(new student(this.rno,this.sname,this.gen,this.mobno,this.scity,this.saction));
      //   }
      // );
    // userfd.append('user_id',this.user_id.toString());
    // userfd.append('user_password',this.user_password);
    // userfd.append('user_type',this.user_type);

    // this._data.AddUser(userfd).subscribe(
    //   (data:User)=>{
    //     console.log(data);
    //     alert("Congratulations!!! User added");

        const fd=new FormData();
        // fd.append('s_gr_no',this.s_gr_no.toString());
        fd.append('s_roll_no',this.s_roll_no.toString());
        fd.append('s_sname',this.s_sname);
        fd.append('s_fname',this.s_fname);
        fd.append('s_lname',this.s_lname);
        fd.append('s_gender',this.s_gender);
        fd.append('s_dob',this.s_dob.toString());
        fd.append('s_email',this.s_email);
        fd.append('s_address',this.s_address);
        fd.append('s_class',this.s_class.toString());
        fd.append('s_div',this.s_div);
        fd.append('s_contactno',this.s_contactno.toString());
        fd.append('s_category',this.s_category);
        fd.append('s_bloodgroup',this.s_bloodgroup);
        fd.append('s_profilepic',this.selectedFile,this.selectedFile.name);
        fd.append('fk_u_id',this.fk_u_id.toString());



        this._data.AddStudent(fd).subscribe(
          (data:any)=>{
            console.log(data);
            //alert("Congratulations!!! Student added");

          });



       });


  }

}




