import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  hiturl1 = 'user/UserStatics'
  hiturl2 = 'user/getAdminUserList';
  token:any;


  ngOnInit() {
    var listUrl = this.baseUrl + this.hiturl1;
    var listUrl1 = this.baseUrl + this.hiturl2;

    var sampleToken = localStorage.getItem('token');
    console.log('token in dashboard',sampleToken);

/**
 * @description ajax method to call the user admin list api
 */


    $.ajax({
      url:listUrl,
      type:'GET',
      data:{'access_token':sampleToken},
      success:function(resData){
        console.log(resData);
        
          var serviceData = resData.data.details;
          console.log('Service Data',serviceData);
          
          
  console.log(serviceData[0]);
  console.log(serviceData[1]);

  var tableData ='';
  var tableData1 ='';

/**
 * @description appending the response data into html document
 */

  tableData += '<tr>';
  tableData += '<td>'+serviceData[0].service+'</td>';
  tableData += '<td>'+serviceData[0].count+'</td>';
  tableData += '</tr>';
  tableData1 += '<tr>';
  tableData1 += '<td>'+serviceData[1].service+'</td>';
  tableData1 += '<td>'+serviceData[1].count+'</td>';
  tableData1 += '</tr>';
  
  $('#table1').append(tableData);
  $('#table').append(tableData1);
      

/**
 * @description ajax call to listing all the user details who has access the services.
 */

  $.ajax({
    url:listUrl1,
    type:'GET',
    data:sampleToken,
    success:function(resData){
      
      console.log('user data list',resData.data.data);
  
      var noOfItems = resData.data.data.length;
      console.log(noOfItems);
      
/**
 * @description looping over the response data receive from the Admin User List API
 */
      $.each(resData.data.data,function(key,value){
       

            var dataTable ='';

            /**
             * @description evaluating the data into empty variable and append it using JQUERY method
             */

            dataTable += '<div id="fetchCard" style="font-size:15px;box-shadow:1px 1px 5px;" class="card col-lg-2">';
            dataTable += '<div class="card-body">'
            dataTable += '<p>'+'FirstName : '+'</span>'+value.firstName+'</p>';
            dataTable += '<p>'+'LastName : '+value.lastName+'</p>';
            dataTable += '<p>'+'EMAIL : '+value.email+'</p>';
            dataTable += '<p>'+'Service : '+value.service+'</p>';
            dataTable += '<p>'+'Role : '+value.role+'</p>';
            dataTable += '</div>';
            dataTable += '</div>';

            
            $('#dataTable').append(dataTable);
      })
            var limitPerPage = 12;
            $('#dataTable .card:gt('+(limitPerPage - 1)+')').hide();
            
            var limit = Math.round(noOfItems / limitPerPage);
            console.log('limit',limit);

      /**
       * @description pagination using jquery
       */

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
