import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';

import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled6';

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private authService: AuthService,
    private orderService: OrderService,
    private productService: ProductService
  ){}

  ngOnInit(): void{
  }
}

