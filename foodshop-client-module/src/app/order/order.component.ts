import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  prods = JSON.parse(localStorage.getItem('order'));
  price = localStorage.getItem('price');
  pdv = localStorage.getItem('pdv');
  allPrice = localStorage.getItem('allPrice');
  values = JSON.parse(localStorage.getItem('orderValues'));

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    localStorage.setItem('order', null);
    localStorage.setItem('prod', null);
    localStorage.setItem('price', null);
    localStorage.setItem('pdv', null);
    localStorage.setItem('allPrice', null);

    if (this.prods !== null) {
      this.orderService.createOrder(this.values.name, this.prods, this.values.address, this.values.tele)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

}
