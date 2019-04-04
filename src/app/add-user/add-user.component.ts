import { Component, OnInit } from '@angular/core';
import { User } from '../../../Classes/User';
import { AdmindashboardService } from '../Services/admindashboard.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user_id:number;
  user_password:string;
  user_type:string;
  usertype_arr:string[]=['Parent','Teacher','Admin','Others'];

  constructor(private _data:AdmindashboardService) { }

  ngOnInit() {
  }
  onadd()
  {
    this._data.AddUser(new User(this.user_id,this.user_password,this.user_type)).subscribe(
      (data:any)=>{
        console.log(data);
  });
}

}
