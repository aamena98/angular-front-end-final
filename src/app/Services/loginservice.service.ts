import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../../../Classes/User';
import { sendMail } from '../../../Classes/sendMail';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  loginurl:string='http://localhost:3000/login/';

  constructor(public _http:HttpClient) { }

  onLogin(item:User)
  {
let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
 return this._http.post(this.loginurl,body,{headers:h});
  }

  sendMail(item:sendMail)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
 return this._http.post(this.loginurl,body,{headers:h});

  }
}
