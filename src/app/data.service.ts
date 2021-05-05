import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Observable, observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private hc:HttpClient) { }
getData():Observable<any>{
  return this.hc.get('https://jsonplaceholder.typicode.com/comments')
}
}
