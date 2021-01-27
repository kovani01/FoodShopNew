import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private elem: HTMLElement;
  // @ts-ignore
  categories: Observable<Category[]>;

  constructor(
    private productService: ProductService,
    private userService: UserService) { }

  mouseOver(): void {
    this.elem = document.getElementById('cart1');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut(): void {
    this.elem = document.getElementById('cart1');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }

  mouseOver1(): void {
    this.elem = document.getElementById('cart2');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut1(): void {
    this.elem = document.getElementById('cart2');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }

  mouseOver2(): void {
    this.elem = document.getElementById('cart3');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut2(): void {
    this.elem = document.getElementById('cart3');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }

  mouseOver3(): void {
    this.elem = document.getElementById('cart4');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut3(): void {
    this.elem = document.getElementById('cart4');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }

  ngOnInit(): void {
  }

}
