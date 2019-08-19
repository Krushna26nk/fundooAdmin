import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';

@Component({
  selector: 'app-cardviewlogin',
  templateUrl: './cardviewlogin.component.html',
  styleUrls: ['./cardviewlogin.component.scss']
})
export class CardviewloginComponent implements OnInit {

  constructor( private dialog : MatDialog) { }

  products = [
        {
          "price"       : '$ 99 / months',
          "name"        : 'Advance',
          "description" : 'Ability to Add Title , Description , Images , Labels , Checklist and Colors.',
          "selected"    : false
        },    
        {
          "price"       : '$ 49 / months',
          "name"        : 'Basic',
          "description" : 'Ability to Add Only Title and Description .',
          "selected"    : false
        }
    
  ]

  ngOnInit() {
  }

  onSelectAdvance(){
    this.products[1].selected = false;
    // console.log(this.products[0]);
    this.dialog.open(DialogcomponentComponent,{
      panelClass:'myapp-no-padding-dialog',
      data :{
        "data":this.products,
        "selected":this.products[0].selected = true
      }
    });
  }

  onSelectBasic(){
    // console.log(this.products[1]);
    this.products[0].selected = false;
    this.dialog.open(DialogcomponentComponent,{
      panelClass:'myapp-no-padding-dialog',
      data :{
        "data":this.products,
        "selected":this.products[1].selected = true
      }
    });
  }

}
