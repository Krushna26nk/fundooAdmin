import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseurl =environment.baseUrl;

  /**
   *@description to get the services details.
   */
    getServices(){
      var url = "user/service"
      return this.http.get(this.baseurl+url);
    }
}
