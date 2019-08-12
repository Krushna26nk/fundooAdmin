import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private http:HttpClient, private sharedService:SharedService) { }
  baseurl = environment.baseUrl
  httpOptions ={
    headers:{
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('token')
    }
  }

  @Input() child:any;

  ngOnInit() {
    // this.sharedService.currentMessage.subscribe(res =>{
    //   console.log(res);
    // })
  }

  onApprove(){
    console.log(this.child);
    var parentId = this.child.parentId; 
    console.log(this.child.parentId);
    var url='questionAndAnswerNotes/approve/'+parentId;
    var data ={
      "isApproved":true
    };

    return this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((res:any)=>{
      console.log(res);
      this.sharedService.changeMessage('ksjld');      
    })

  }

  onReject(){
    var url='';
    console.log(this.child);
    var parentId = this.child.parentId; 
    console.log(this.child.parentId);
    var url='questionAndAnswerNotes/reject/'+parentId;
    var data ={}
    return this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((res:any)=>{
      console.log(res);
      this.sharedService.changeMessage('jhjhasd');      
    })
  }

}
