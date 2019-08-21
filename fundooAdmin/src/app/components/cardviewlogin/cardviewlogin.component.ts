import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';
import { environment } from 'src/environments/environment';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardviewlogin',
  templateUrl: './cardviewlogin.component.html',
  styleUrls: ['./cardviewlogin.component.scss']
})
export class CardviewloginComponent implements OnInit {

  constructor( private dialog : MatDialog,private adminService:AdminService,private router:Router) { }

  baseurl = environment.baseUrl;
  products:any[] = []
  services : any[] =[];

  ngOnInit() {
    this.getServices();
  }

  // to get all serices details 

  getServices(){
    this.adminService.getServices().subscribe((res:any) =>{
      var serviceData = res.data.data;
      console.log('services detail data',serviceData);
      serviceData.forEach(element => {
        this.services.push(element);
      });
    })
  }

  // on selection of particular service

  onSelectService(){
    
  }

  onSignIn(){
    this.router.navigateByUrl('admin');
  }

}
