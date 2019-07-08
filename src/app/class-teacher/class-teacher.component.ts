import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../Services/class-teacher.service';
import { classTeacher } from 'Classes/classTeacher';
import { TeacherserviceService } from '../Services/teacherservice.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-class-teacher',
  templateUrl: './class-teacher.component.html',
  styleUrls: ['./class-teacher.component.css']
})
export class ClassTeacherComponent implements OnInit {
  class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
  div_arr:string[]=['A','B'];
  c_t_name:string;
  c_t_class:number;
  c_t_div:string;
  fk_u_id:number;
  c_t_name_arr:string[]=[];
  constructor(private _route:Router,private _data:ClassTeacherService,private _ser:TeacherserviceService) { }

  ngOnInit() {
this._ser.viewTeacherList().subscribe(
  (data:any)=>{
    for (let index = 0; index < data.length; index++) {
      this.c_t_name_arr[index] = data[index].t_name;

    }

  }
);
  }
  change(c_t_name)
  {

  }
onadd()
{
  this._data.getUserId(this.c_t_name).subscribe(
    (data:any)=>
    {
      this.fk_u_id=data[0].fk_u_id;
      console.log(data);
      this._data.addclassTeacher(new classTeacher(this.c_t_name,this.c_t_class,this.c_t_div,this.fk_u_id)).subscribe(
        (data:any)=>{
          console.log(data);
          this._route.navigate(['/classTeacherDisplay']);
    });

    }
  );

}
}
