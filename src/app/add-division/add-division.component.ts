import { Component, OnInit } from '@angular/core';
import { div } from '../../../Classes/Division';
import { DivisionService } from '../Services/division.service';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.css']
})
export class AddDivisionComponent implements OnInit {

  div_name:string;
  constructor(private _data:DivisionService) { }

  ngOnInit() {
  }
  onadd()
    {
      this._data.addDiv(new div(this.div_name)).subscribe(
        (data:any)=>{
          console.log(data);
    });
    }



}


