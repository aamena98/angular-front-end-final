import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { Teacher } from '../../../Classes/Teacher';
import { TeacherserviceService } from '../Services/teacherservice.service';

export interface PeriodicElement {
  t_profilepic: string;
  t_number: string;
  t_name: string;
  t_class:number;
  t_classdiv:string;
  t_qualification:string;
}
const ELEMENT_DATA:PeriodicElement[]=[

];
@Component({
  selector: 'app-teacher-display',
  templateUrl: './teacher-display.component.html',
  styleUrls: ['./teacher-display.component.css']
})
export class TeacherDisplayComponent implements OnInit {


  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
t_arr:Teacher[];
  displayedColumns: string[] = ['select','t_profilepic','t_number','t_name','t_class','t_classdiv','t_qualification','Buttons'];



@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private _ser:TeacherserviceService,private _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.viewTeacherList().subscribe(
          (data:Teacher[])=>{
            console.log(data);
            this.t_arr=data;
           this.dataSource.data=this.t_arr;
          }
        );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select());
  }

  delete(item:Teacher)
  {
    this._ser.deleteTeacher(item.fk_u_id).subscribe(
      (data:Teacher[])=>{
        console.log(data);
        this.t_arr.splice(this.t_arr.indexOf(item),1);
        this.dataSource.data=this.t_arr;
      }
    );
  }
  deleteAll()
  {
    this._ser.deleteAll().subscribe(
      (data:Teacher[])=>{
        console.log(data);
        this.t_arr.splice(0,this.t_arr.length);
        this.dataSource.data=this.t_arr;
      }
    );
  }
  update(item:Teacher)
{
  this._route.navigate(['/updateTeacher',item.fk_u_id]);
}
updateprofile(item:Teacher)
{
  this._route.navigate(['/updateTeacherProfile',item.fk_u_id]);
}

}
