import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Classes/Student';
import { Router,ActivatedRoute } from '@angular/router';
import { AdmindashboardService } from "../Services/admindashboard.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-profilepic',
  templateUrl: './update-profilepic.component.html',
  styleUrls: ['./update-profilepic.component.css']
})
export class UpdateProfilepicComponent implements OnInit {

  constructor(private _ser:AdmindashboardService,private _aroute:ActivatedRoute,private _route:Router) { }

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
  // s_username:string="S"+this.s_gr_no;
  // s_password:string="S"+this.s_class+this.s_div+this.s_gr_no;
  s_profilepic:string;
  selectedFile:File=null;
  arr:Student[]=[];
  fk_u_id:number;
gender_arr:string[]=['Male','Female'];
class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
div_arr:string[]=['A','B','C'];
category_arr:string[]=['General','SC','ST','OBC'];
bloodgroup_arr:string[]=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
teacher_arr:string[]=['sunita','vinita','minita','namita'];
flag1:boolean=true;
flag2:boolean=false;
public file_srcs: string[] = [];
selectedfile1;
public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
onChange(value)
  {
    this.flag2=true;
    this.flag1=false;
    this.selectedFile=<File>value.target.files[0];
    this.selectedfile1=<File>value.target.files[0].name;
    console.log(this.selectedFile);
  }
  ngOnInit() {
this.flag1=true;
this.flag2=false;
    this.fk_u_id=this._aroute.snapshot.params['id'];
    console.log(this.fk_u_id);
    this._ser.getStudentByUserIdforprofilepic(this.fk_u_id).subscribe(
      (data:Student[])=>{
        console.log(data);
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
        //this.fk_u_id=data[0].fk_u_id;
        this.s_profilepic=data[0].s_profilepic;
        console.log(this.s_profilepic);
        this.arr=data;

      }
    );


}

  uploadphoto()
  {
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
fd.append('fk_u_id',this.fk_u_id.toString());
fd.append('s_profilepic',this.selectedFile,this.selectedFile.name);
    this._ser.updateProfilepic(fd).subscribe(
      (data:Student)=>{
    console.log(data);
    alert('updated Successfully!!!');
    this._route.navigate(['/studentDisplay']);
  }
  );
}
}
