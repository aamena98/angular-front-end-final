import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../Services/class-teacher.service';
import { classTeacher } from 'Classes/classTeacher';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-class-teacher',
  templateUrl: './edit-class-teacher.component.html',
  styleUrls: ['./edit-class-teacher.component.css']
})
export class EditClassTeacherComponent implements OnInit {

  class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
  div_arr:string[]=['A','B','C'];
  c_t_name:string;
  c_t_class:number;
  c_t_div:string;
  fk_u_id:number;

  constructor(private _data:ClassTeacherService,private _aroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.fk_u_id=this._aroute.snapshot.params['id'];
    this._data.getclassTeacherByUserId(this.fk_u_id).subscribe(
      (data:classTeacher[])=>{
        console.log(this.fk_u_id);
        this.c_t_name=data[0].c_t_name;
        this.c_t_class=data[0].c_t_class;
        this.c_t_div=data[0].c_t_div;
      });
  }
  onupdate()
  {
    this._data.updateclassTeacher(new classTeacher(this.c_t_name,this.c_t_class,this.c_t_div,this.fk_u_id)).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }

}
