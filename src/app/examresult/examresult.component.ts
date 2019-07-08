import { Component, OnInit } from '@angular/core';
import { studentexamResult } from '../../../Classes/result_class';
import { div } from '../../../Classes/division';
import { studentclass } from '../../../Classes/studentclass';
import { StudentClassService } from '../Services/student-class.service';
import { ResultService } from '../Services/result.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import { DivisionService } from '../Services/division.service';
import { Student } from '../../../Classes/Student';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.css']
})
export class ExamresultComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
i:number;
j:number=0;
  div_arr:string[]=[];
  fk_u_id:number;
  div_name:string;
  class_arr:number[]=[];
  class_number:number;
  r_sub1:string;
  r_sub2:string;
  r_sub3:string;
  r_sub4:string;
  r_sub5:string;
  s_arr:Student[]=[];
  array_len:number;
  r_mark1:number;
  r_mark2:number;
  r_mark3:number;
  r_mark4:number;
  r_mark5:number;
  r_examtype:string;

fk_u_id_arr:number[]=[];
class_number_arr:number[]=[];
div_name_arr:string[]=[];
sub1_arr:string[]=[];
sub2_arr:string[]=[];
sub3_arr:string[]=[];
sub4_arr:string[]=[];
sub5_arr:string[]=[];
mark1_arr:number[]=[];
mark2_arr:number[]=[];
mark3_arr:number[]=[];
mark4_arr:number[]=[];
mark5_arr:number[]=[];
examtype_arr:string[]=['HALF-YEARLY EXAM','FINAL EXAM'];
exam_result:studentexamResult[]=[];

  constructor(public _div:DivisionService,public _stuclass:StudentClassService,public _result:ResultService) { }

  getstudents()
  {
    this._result.getstudentbyclassdiv(this.class_number,this.div_name).subscribe(
      (data:Student[])=>{
        console.log(data);
        this.s_arr=data;
        this.array_len=this.s_arr.length;

       // this.add();
      }
    );

  }
  add()
  {
    console.log("in add method");
    this.s_arr.forEach(element => {
      console.log(element.fk_u_id);
        this.fk_u_id_arr.push(element.fk_u_id);
    });
    this.exam_result.forEach(element => {
        this.sub1_arr.push(this.r_sub1);
        this.sub2_arr.push(this.r_sub2);
        this.sub3_arr.push(this.r_sub3);
        this.sub4_arr.push(this.r_sub4);
        this.sub5_arr.push(this.r_sub5);
     });
  //this.onadd();
//console.log(this.mark1_arr);
}
  ngOnInit() {
    this._div.getDiv().subscribe(
      (data:div[])=>{
        console.log(data);
        for (let index = 0; index < data.length; index++) {
          this.div_arr.push(data[index].div_name);

        }

      }
    );

    this._stuclass.getclass().subscribe(
      (data:studentclass[])=>
      {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
          this.class_arr.push(data[index].class_number);

        }

      }
    );
  }

  onadd()
  {
this.add();
console.log("In onadd method printing detail");
  for(this.i=0;this.i<this.array_len;this.i++){

    if(this.j<this.array_len)
    {
      console.log(this.fk_u_id_arr[this.i]);
console.log(this.class_number);
console.log(this.div_name);
console.log(this.r_sub1);
console.log(this.mark1_arr[this.i]);
console.log(this.r_sub2);
console.log(this.mark2_arr[this.i]);
console.log(this.r_sub3);
console.log(this.mark3_arr[this.i]);
console.log(this.r_sub4);
console.log(this.mark4_arr[this.i]);
console.log(this.r_sub5);
console.log(this.mark5_arr[this.i]);
console.log(this.r_examtype);

this.exam_result.push(new studentexamResult(this.fk_u_id_arr[this.i],this.class_number,this.div_name,this.r_sub1,this.mark1_arr[this.i],this.r_sub2,this.mark2_arr[this.i],this.r_sub3,this.mark3_arr[this.i],this.r_sub4,this.mark4_arr[this.i],this.r_sub5,this.mark5_arr[this.i],this.r_examtype))
  this.j=this.j+1;
}
}
this._result.Addresult(this.exam_result).subscribe(
  (data:any)=>{
    console.log(data);
    alert("Exam result uploaded successfully");
});
  }

}
