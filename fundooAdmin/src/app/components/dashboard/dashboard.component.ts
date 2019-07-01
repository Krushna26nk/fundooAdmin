import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  baseUrl = environment.baseUrl;

  hiturl1 = 'user/UserStatics'
  hiturl2 = 'user/getAdminUserList';
  token:any;

  ngOnInit() {
    var listUrl = this.baseUrl + this.hiturl1;
    var listUrl1 = this.baseUrl + this.hiturl2;

    var sampleToken = localStorage.getItem('token');
    console.log(sampleToken);
    $.ajax({
      url:listUrl,
      type:'GET',
      data:{'access_token':sampleToken},
      success:function(resData){
        console.log('sample token in ',this.sampleToken);
        // resData:[] = resData;
        console.log(resData);
        
          var serviceData = resData.data.details;
          console.log(serviceData);
          

          console.log(serviceData[0].service);
          
  console.log(serviceData[0]);
  console.log(serviceData[1]);

  var tableData ='';
  var tableData1 ='';

  tableData += '<tr>';
  tableData += '<td>'+serviceData[0].service+'<td>';
  tableData += '<td>'+serviceData[0].count+'<td>';
  tableData += '<tr>';

  tableData1 += '<tr>';
  tableData1 += '<td>'+serviceData[1].service+'<td>';
  tableData1 += '<td>'+serviceData[1].count+'<td>';
  tableData1 += '<tr>';
  
  $('#table1').append(tableData);
  $('#table').append(tableData1);
      

  $.ajax({
    url:listUrl1,
    type:'GET',
    data:sampleToken,
    success:function(resData){
      // console.log('sample token in ',this.sampleToken);
      
      console.log('user data list',resData.data.data);
  
      var noOfItems = resData.data.data.length;
      console.log(noOfItems);
      

      $.each(resData.data.data,function(key,value){
        // console.log(value.firstName);
       

        var dataTable ='';

        dataTable += '<div id="fetchCard" style="font-size:15px;border:1px solid;background-color:#C2CAD0" class="card col-lg-3">';
        dataTable += '<div class="card-body">'
        dataTable += '<p>'+'FirstName : '+'</span>'+value.firstName+'</p>';
        dataTable += '<p>'+'LastName : '+value.lastName+'</p>';
        dataTable += '<p>'+'EMAIL : '+value.email+'</p>';
        dataTable += '<p>'+'Service : '+value.service+'</p>';
        dataTable += '<p>'+'Role : '+value.role+'</p>';
        dataTable += '</div>';
        dataTable += '</div>';

        
        // console.log(value.firstName);
        // console.log(value.lastName);
        
        $('#dataTable').append(dataTable);
      })
      var limitPerPage = 12;
      $('#dataTable .card:gt('+(limitPerPage - 1)+')').hide();
      
      var limit = Math.round(noOfItems / limitPerPage);
      console.log(limit);
      for(var i=2;i<limit;i++){
        $(".pagination").append("<li class='page-item'><a class='page-link' href='javascript:void(0)'>"+i+"</a></li>")
      }
      $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>NEXT</a></li>")
      $(".pagination li").on("click",function(){
        if($(this).hasClass("active")){
          return false;
        }
        else{
          var currentPage = $(this).index();
          $(".pagination li").removeClass("active");
          $(this).addClass("active");
          $("#dataTable .card").hide();

          var total = limitPerPage * currentPage;
          for(var i=(total-limitPerPage);i<total;i++){
            $("#dataTable .card:eq("+i+")").show();
          }
        }



      })
      
    }
  })     
      }
      
    })
    
    
  }

}
