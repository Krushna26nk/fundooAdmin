import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardviewlogin',
  templateUrl: './cardviewlogin.component.html',
  styleUrls: ['./cardviewlogin.component.scss']
})
export class CardviewloginComponent implements OnInit {

  constructor() { }

  products : [
    {
      'product1':
        {
          "price"       : 99,
          "name"        : 'Advance',
          "description" : 'Ability to Add Title , Description , Images , Labels , Checklist and Colors.'
        }
    },
    {
      'product2':
      {
        "price"       : 49,
        "name"        : 'Basic',
        "description" : 'Ability to Add Only Title and Description .'
      }
    }
  ]

  ngOnInit() {
  }

}
