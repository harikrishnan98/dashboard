import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public dashboard: any;
  public orginalData: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getHttpResponse();
  }


  public getHttpResponse(){

    return this.http.get('http://www.mocky.io/v2/5e8db2f631000064b0429b4a').subscribe(

    (data:any) => {

      this.dashboard = data.Dashboard;

      console.log('Dashboard',this.dashboard);

      this.orginalData = data.Data;

      console.log('Data',this.orginalData);
    }

    )
  }

}
