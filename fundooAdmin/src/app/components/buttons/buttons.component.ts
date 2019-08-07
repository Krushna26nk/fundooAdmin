import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  baseurl = environment.baseUrl
  httpOptions ={
    headers:{
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('token')
    }
  }

  @Input() child:any;

  ngOnInit() {
  }

  onApprove(){
    console.log(this.child);
    var parentId = this.child.parentId; 
    console.log(this.child.parentId);
    var url='questionAndAnswerNotes/approve/'+parentId;
    var data ={
      "isApproved":true
    };

    this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((res:any)=>{
      console.log(res);      
    })

  }

  onReject(){
    var url='';
    console.log(this.child);
    var parentId = this.child.parentId; 
    console.log(this.child.parentId);
    var url='questionAndAnswerNotes/reject/'+parentId;
    var data ={}
    this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((res:any)=>{
      console.log(res);      
    })
  }

}
