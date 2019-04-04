import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator,MatSort, MatIconBase} from '@angular/material';
import { Router } from '@angular/router';
import { div } from '../../../Classes/division';
import { DivisionService } from '../Services/division.service';
export interface PeriodicElement {
  div_name;
}
const ELEMENT_DATA:PeriodicElement[]=[

];


@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {


  dataSource = new MatTableDataSource();
  pageSizeOptions: number[] = [1,2,5];
  selection = new SelectionModel<PeriodicElement>(true, []);
s_arr:div[];
  displayedColumns: string[] = ['select','div_name','Buttons'];

@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private _ser:DivisionService,private _route:Router) { }

  ngOnInit() {

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
        this._ser.getDiv().subscribe(
          (data:div[])=>{
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

  delete(item:div)
  {
    this._ser.deleteDiv(item.div_name).subscribe(
      (data:div[])=>{
        console.log(data);
        this.s_arr.splice(this.s_arr.indexOf(item),1);
        this.dataSource.data=this.s_arr;
      }
    );
  }

}
