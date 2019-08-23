import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseurl =environment.baseUrl;
  httpOptions = {
    headers : new HttpHeaders({
    "Content-Type":'application/json',
    "Authorization":localStorage.getItem('token')
  })
  }

  /**
   *@description to get the services details.
   */
    getServices(){
      var url = "user/service"
      return this.http.get(this.baseurl+url);
    }

    getCartList(){
      var url = 'productcarts/userCartList';
      return this.http.get(this.baseurl+url,this.httpOptions);
    }

    completeOrder(data){
      var url = 'productcarts/adminCompleteOrder';
      return this.http.post(this.baseurl+url,data,this.httpOptions);
    }

    cancelOrder(data){
      var url = 'productcarts/adminCancelOrder';
      return this.http.post(this.baseurl+url,data,this.httpOptions);
    }
}
