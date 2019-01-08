import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { Student } from '../../../Classes/Student';
import { AdmindashboardService } from '../Services/admindashboard.service';
export interface PeriodicElement {
  s_profilepic: string;
  s_roll_no: number;
  s_sname: string;
  s_fname: string;
  s_class:number;
  s_div:string;
}
const ELEMENT_DATA:PeriodicElement[]=[

];
@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {

  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
s_arr:Student[];
  displayedColumns: string[] = ['select','s_profilepic','s_roll_no','s_sname','s_fname','s_class','s_div','Buttons'];

@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private _ser:AdmindashboardService,private _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.viewClass().subscribe(
          (data:Student[])=>{
            console.log(data);
            this.s_arr=data;
           this.dataSource.data=this.s_arr;
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

  delete(item:Student)
  {
    this._ser.deleteStudent(item.s_roll_no).subscribe(
      (data:Student[])=>{
        console.log(data);
        this.s_arr.splice(this.s_arr.indexOf(item),1);
        this.dataSource.data=this.s_arr;
      }
    );
  }
  deleteAll()
  {
    this._ser.deleteAll().subscribe(
      (data:Student[])=>{
        console.log(data);
        this.s_arr.splice(0,this.s_arr.length);
        this.dataSource.data=this.s_arr;
      }
    );
  }
  update(item:Student)
{
  this._route.navigate(['/updateStudent',item.s_gr_no]);
}
updateprofile(item:Student)
{
  this._route.navigate(['/updateprofilepic',item.s_gr_no]);
}
}


