import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { studentexamResult } from '../../../Classes/result_class';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  examresulturl:string='http://localhost:3000/result/';

  constructor(public _http:HttpClient) { }
  Addresult(item){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.examresulturl,body,{headers:h});
  }
  deleteresult(fk_u_id:number)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.examresulturl+fk_u_id,{headers:h});

  }
  updateresult(item:studentexamResult)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.examresulturl+item.fk_u_id,body,{headers:h});
  }
  getresultbyclassdiv(r_class:number,r_div:string)
  {
    return this._http.get(this.examresulturl+r_class+"/"+r_div);
  }

  getstudentbyclassdiv(c_no:number,d_name:string)
  {
    return this._http.get(this.examresulturl+c_no+"/"+d_name);
  }

}
