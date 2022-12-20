import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { work } from '../Components/work';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {

  constructor(public http:HttpClient) { }

  baseUrl:string="http://localhost:880/phpmyadmin/index.php?route=/sql&db=testdb&table=tblwork&pos=0";

  submit(){
    return this.http.get<work[]>(this.baseUrl+'view.php')
  }
}
