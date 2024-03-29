import { Component, OnInit } from '@angular/core';
import { User } from '../../../Classes/User';
import { LoginserviceService } from '../Services/loginservice.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user_id:number=2018;
  user_password:string;
  usertype_arr:string[]=['Parent','Teacher','Admin'];
  user_type:string="Admin";
  flag:boolean=false;
constructor(private _ser:LoginserviceService,private _route:Router) { }


  ngOnInit() {
    console.log('login called');
  }

  onlogin()
  {
    this._ser.onLogin(new User(this.user_id,this.user_password,this.user_type)).subscribe(
      (data:User[])=>{

        console.log(data);
        if(data.length==1){
          alert('Login Successfully!!!');
          console.log(data.length);
          localStorage.setItem('user_id',this.user_id.toString());
         this._route.navigate(['/addStudent']);
         this.flag=true;
        }
        else{
          alert('Wrong email or password!!!');
        }
        }

    );
  }


  forgetpass()
  {

  }
}
