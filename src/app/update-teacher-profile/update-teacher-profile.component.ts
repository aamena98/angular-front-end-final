import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../Classes/Teacher';
import { Router,ActivatedRoute } from '@angular/router';
import { TeacherserviceService } from "../Services/teacherservice.service";
@Component({
  selector: 'app-update-teacher-profile',
  templateUrl: './update-teacher-profile.component.html',
  styleUrls: ['./update-teacher-profile.component.css']
})
export class UpdateTeacherProfileComponent implements OnInit {


  flag1:boolean=true;
  flag2:boolean=false;

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
  this.flag1=false;
this.flag2=true;
  this.selectedFile=<File>value.target.files[0];
}
  constructor(private _ser:TeacherserviceService,private _aroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
this.flag1=true;
this.flag2=false;
    this.fk_u_id=this._aroute.snapshot.params['id'];
    this._ser.getTeacherByidforprofilepic(this.fk_u_id).subscribe(
      (data:Teacher[])=>{
        console.log(this.fk_u_id);
        //  this.t_number=data[0].t_number;
        this.t_name=data[0].t_name;
        this.t_gender=data[0].t_gender;
        this.t_dob=data[0].t_dob;
        this.t_email=data[0].t_email;
        this.t_qualification=data[0].t_qualification;
        this.t_address=data[0].t_address;
        this.t_contactno=data[0].t_contactno;
        this.fk_u_id=data[0].fk_u_id;
        this.t_category=data[0].t_category;
       this.t_profilepic=data[0].t_profilepic;
      }
    );


  }
  uploadphoto()
  {
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


    this._ser.updateProfilepic(fd).subscribe(
      (data:Teacher)=>{
        console.log(data);
        alert("Profile Pic Updated");
        this._route.navigate(['/teacherDisplay']);
      });
  }

}
