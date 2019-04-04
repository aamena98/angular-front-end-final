import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { div } from '../../../Classes/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  divgetaddurl:string='http://localhost:3000/div/';
  constructor(public _http:HttpClient) { }


  addDiv(item:div){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.divgetaddurl,body,{headers:h});
  }


  getDiv()
    {
       return this._http.get(this.divgetaddurl);
    }

    deleteDiv(div_name:string)
    {
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.divgetaddurl+div_name,{headers:h});
    }


}
