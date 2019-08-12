import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private http:HttpClient , private sharedService:SharedService) { }

  replyArray : any[] =[];


  ngOnInit() {
  
  }
 

}
