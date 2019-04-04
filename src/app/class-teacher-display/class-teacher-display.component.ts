import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { classTeacher } from '../../../Classes/classTeacher';
import { ClassTeacherService } from '../Services/class-teacher.service';
export interface PeriodicElement {
  c_t_name : string;
  c_t_class:number;
  c_t_div:number;
}
const ELEMENT_DATA:PeriodicElement[]=[

];

@Component({
  selector: 'app-class-teacher-display',
  templateUrl: './class-teacher-display.component.html',
  styleUrls: ['./class-teacher-display.component.css']
})
export class ClassTeacherDisplayComponent implements OnInit {

  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
  t_arr:classTeacher[];
  displayedColumns: string[] = ['select','c_t_name','c_t_class','c_t_div','Buttons'];

@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private _ser:ClassTeacherService,private _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.getclassteacher().subscribe(
          (data:classTeacher[])=>{
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

  update(item:classTeacher)
{
  this._route.navigate(['/updateClassTeacher',item.fk_u_id]);
}

delete(item:classTeacher)
{
  this._ser.deleteclassTeacher(item.fk_u_id).subscribe(
    (data:classTeacher[])=>{
      console.log(data);
      this.t_arr.splice(this.t_arr.indexOf(item),1);
      this.dataSource.data=this.t_arr;
    }
  );

}
}
