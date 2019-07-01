import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-samplecomponent',
  templateUrl: './samplecomponent.component.html',
  styleUrls: ['./samplecomponent.component.css']
})
export class SamplecomponentComponent implements OnInit {

baseurl = environment.baseUrl;
// console.log(baseurl);


hiturl = 'user/adminLogin'
hiturl1 = 'user/UserStatics'
email : any;
password:any;

  constructor(private router:Router) { }

  adminForm = new  FormGroup({
    email:new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  onSubmit(){
    
  }
  

  ngOnInit() {
    var fullUrl = this.baseurl + this.hiturl;
    console.log(this.baseurl);
    console.log(fullUrl);
    
    
    $('.emailError').hide();
    $('.emailError1').hide();
    $('.passwordError').hide();
    $('.passwordError1').hide();

   
      $('#button').click(function(){

        var email = $('#email').val();
        console.log(email);
        var password = $('#password').val();
        console.log(password);

        var diff1 = email.indexOf(".");
        var diff2 = email.indexOf("@");


  var diff = diff1 - diff2;
  
  // console.log(fullUrl);
  
  var listUrl = this.baseurl + this.hiturl1;
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
          
        }
  
      });
    }


    })
    
  }

}
