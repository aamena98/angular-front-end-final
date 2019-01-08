import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../../../Classes/User';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  loginurl:string='http://localhost:3000/login/';
  // adduserurl:string='http://localhost:3000/user/';
  constructor(public _http:HttpClient) { }

  onLogin(item:User)
  {
let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
 return this._http.post(this.loginurl,body,{headers:h});
  }

  // adduser(item:FormData){
  //   return this._http.post(this.adduserurl,item);
  // }
}
