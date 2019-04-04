import { Injectable } from '@angular/core';
import { studentclass } from '../../../Classes/studentclass';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  classaddgeturl:string='http://localhost:3000/studentclass/';
  constructor(public _http:HttpClient) { }
  Addclass(item:studentclass){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.classaddgeturl,body,{headers:h});
  }
  getclass()
    {
       return this._http.get(this.classaddgeturl);
    }
    deleteclass(class_number:number)
    {
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.classaddgeturl+class_number,{headers:h});
    }

}
