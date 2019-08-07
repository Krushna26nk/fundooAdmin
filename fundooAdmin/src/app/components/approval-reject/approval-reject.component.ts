import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-approval-reject',
  templateUrl: './approval-reject.component.html',
  styleUrls: ['./approval-reject.component.css']
})
export class ApprovalRejectComponent implements OnInit {

  constructor(private http:HttpClient, private sharedService:SharedService) { }

  replyArray :any[] =[]


  baseurl = environment.baseUrl;
  url ='questionAndAnswerNotes/getUnApprovedAnswer'
  httpOptions ={
    headers:{
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('token')
    }
  }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe((res:any)=>{
      this.getUnApprovedList();
    })
    // this.getUnApprovedList()
  //  this.sharedService.currentMessage.subscribe((res:any)=>{
  //    console.log('data in approve componenet',res);
  //    var data = res;
  //    res.forEach(element => {
  //      this.replyArray.push(element);
  //    });
  //    console.log('reply',this.replyArray);
     
  //  })
  }

  onApprove(item){
    console.log(item);
  }

  onReject(item){
    console.log(item);
  }
  getUnApprovedList(){
    this.http.get(this.baseurl+this.url,this.httpOptions).subscribe((res:any)=>{
      console.log(res.data);
      res.data.forEach(element => {
        if(element.isApproved == false && element.isCanceled == false){
          this.replyArray.push(element);
        }
      });
      console.log('reply',this.replyArray);
      
      // this.sharedService.changeMessage(res.data);
    })
  }

}
