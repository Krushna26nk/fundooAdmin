import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import * as $ from 'jquery';   
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  
  constructor(private service:DataService) { }

  baseurl = environment.baseUrl;

  dataArray : any =[];
  hiturl = 'user/adminLogin'

  hiturl1 = 'user/UserStatics'
 
  // resData:any;
  sampleToken:any;

  result : false;

  sendingData :any;

  getToken(){
    let getToken = localStorage.getItem('token');
    console.log(getToken);
    return getToken
    
  }
  
  ngOnInit(){

    var fullUrl = this.baseurl + this.hiturl;
    var listUrl = this.baseurl + this.hiturl1;

  

    $('.emailError').hide();
    $('.emailError1').hide();
    $('.passwordError').hide();
    $('.passwordError1').hide();


    

    $('#button').click(function(){ 


   var email = $('#email').val();
   console.log(email);
   console.log(password);
   
   
     
    
  var password = $('#password').val();
   
  console.log(fullUrl);
  console.log(listUrl);

  var diff1 = email.indexOf(".");
    var diff2 = email.indexOf("@");


    var diff = diff1 - diff2;
    console.log(diff);

      if(email == " "){
        $('.emailError').show();
      }
      else if(password == " "){
        $('.passwordError').show();
      }
      else if(password.length < 5){
        $('.passwordError1').show();
      }
      
      else if(diff <= 2){
        $('.emailError1').show();
      }
    
      else{
      $.ajax({
        url: fullUrl,
        type: 'POST',
        data: {email,password},
        success : function(response){
          
          var token = response.id;
          localStorage.setItem('token',token);

          this.sampleToken = localStorage.getItem('token');
          console.log(this.sampleToken);
          
          console.log(response);
          console.log(token);
          var body = 'access_token'+this.sampleToken;
          
          $.ajax({
            url:listUrl,
            type:'GET',
            data:{'access_token':this.sampleToken},
            success:function(resData){
              console.log('sample token in ',this.sampleToken);
              
              console.log(resData);
              
            }
          })
          
        }
  
      });
    }
    })
  }


}
