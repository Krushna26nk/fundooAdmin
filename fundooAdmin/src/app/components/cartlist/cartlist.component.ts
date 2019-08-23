import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {

  constructor(private adminService:AdminService,private sharedService : SharedService) { }

  cartList : any[] = [];

  ngOnInit() {
    this.sharedService.currentMessage.subscribe((res) =>{
      this.getCartList();
      console.log(res);
    })
  }

  getCartList(){
    this.adminService.getCartList().subscribe((res :any ) =>{
      console.log('cart list',res.data);
      var data = res.data;
      data.forEach(element => {
        this.cartList.push(element);
      });
    })
  }

  onCompleteOrder(cart){
    var data = {  "cartId":cart.id }
    console.log(data);
    this.adminService.completeOrder(data).subscribe((res:any) => {
      console.log(res);
    })
  }

  onCancleOrder(cart){
    var data ={  "cartId":cart.id  }
    console.log(data);
    this.adminService.cancelOrder(data).subscribe((res:any) => {
      console.log(res);
    })
  }

}
