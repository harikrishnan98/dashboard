import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FreeApiService{

 constructor(private httpclient: HttpClient){}


   getcomments(): Observable<any> {

    return this.httpclient.get("http://jsonplaceholder.typicode.com/posts/1/comments");
   }


}