import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  // baseurl = 'http://34.213.106.173/api/';
  // hiturl1 = 'user/UserStatics';

  // fulurl = this.baseurl + this.hiturl1;
  data:any;
  
  ngOnInit() {
    // var sampleToken = this.admin.getToken();
    // console.log('token in list',sampleToken);
    
   
    // console.log(this.verifytoken);
    
    // $.ajax({
    //   url:this.fulurl,
    //   type:'GET',
    //   data:this.verifytoken,
    //   success: function(response){
    //     console.log(response);
        
    //   }
    // })

  }

}
