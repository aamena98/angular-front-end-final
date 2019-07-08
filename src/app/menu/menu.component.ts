import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AdmindashboardService } from '../Services/admindashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private _route:Router,private _Admin:AdmindashboardService) {}
get LogIn(){
 // console.log('called');
  //console.log(this._Admin.isLoggedIn());
  if(this._Admin.isLoggedIn()){
    return true;
  }
  else{
    return false;
  }
}
onlogout()
{
  localStorage.setItem('user_id','');
  this._route.navigate(['/']);
}
onaddiv()
{
  this._route.navigate(['/addDivision']);
}
onaddstu()
{
  this._route.navigate(['/addStudent']);
}
onstudisplay()
{
  this._route.navigate(['/studentDisplay']);
}
onaddteacher()
{
  this._route.navigate(['/addTeacher']);
}
onteacherdisplay()
{
  this._route.navigate(['/teacherDisplay']);
}
onaddnotice()
{
  this._route.navigate(['/AddNotice']);
}
onstuattendance()
{
  this._route.navigate(['/StudentAttendance']);
}
onadduser()
{
  this._route.navigate(['/AddUser']);
}
onclassteacherdisplay()
{
  this._route.navigate(['/classTeacherDisplay']);
}
onaddclassteacher()
{
  this._route.navigate(['/classTeacher']);
}
ondisplaydiv()
{
  this._route.navigate(['/displayDivision']);
}
onnewatten()
{
  this._route.navigate(['/newattendance']);
}
onresult()
{
  this._route.navigate(['/result']);
}
onnewResult()
{
  this._route.navigate(['/newresult']);
}

display()
  {
    this._route.navigate(['/studentDisplay']);
  }
  }
