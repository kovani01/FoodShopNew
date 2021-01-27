import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ItemComponent} from './item/item.component';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {getValueSymbolOfDeclaration} from '@angular/core/schematics/utils/typescript/symbol';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('changePosition', [
      state('initial', style({ left: '120%' })),
      state('final', style({
        left: '35%'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    trigger('changeOpacity', [
      state('initial', style({ opacity: '0', display: 'none' })),
      state('final', style({
        opacity: '0.3'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class CartComponent implements OnInit{

  price = 0;
  pdv = 0;
  allPrice = 0;
  currentState = 'initial';
  prods = [];

  created = false;
  @ViewChild('item', {read: ViewContainerRef}) item: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private router: Router, private authService: AuthService, private userService: UserService) { }

  AddComponent(data): void{
    let ItemComponents;
    let ItemComponentRef;
    let prod;
    prod = [];

    console.log('created');

    ItemComponents = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    ItemComponentRef = this.item.createComponent(ItemComponents);
    data = JSON.parse(data);
    ItemComponentRef.instance.value = {prodName: data.prodName, price: data.price, category: data.category};
    ItemComponentRef.instance.sum = data.count * data.price;
    ItemComponentRef.instance.count = data.count;

    prod.push(data.category + data.prodName, data.count, data.price * data.count);
    this.prods.push(prod);

    this.price += data.count * data.price;
    this.pdv += (this.price / 100) * 5;

    this.allPrice = this.price + this.pdv;
  }

  changeState(): void {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  FormOrder(): void{
    const elem = document.getElementById('back');
    this.changeState();
    elem.style.display = 'block';
  }

  SaveData(tele, address): void{
    this.userService.getUserById(this.authService.getUserId()).subscribe(
      (data) => {
        // tslint:disable-next-line:prefer-const
        let values = JSON.parse('{"tele": "' + tele + '", "address": "' + address + '", "name": "' + data.login + '"}');
        localStorage.setItem('orderValues', JSON.stringify(values));
      });
    localStorage.setItem('price', String(this.price));
    localStorage.setItem('pdv', String(this.pdv));
    localStorage.setItem('allPrice', String(this.allPrice));
    localStorage.setItem('prods', JSON.stringify(this.prods));

    this.router.navigateByUrl('/order');
  }

  AddItemsToCart(): void{
    if (!this.created) {
      this.created = true;
      this.item.clear();
      let data;
      data = JSON.parse(localStorage.getItem('prod'));

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.AddComponent(data[i]);
      }
      console.log(this.prods);
    }
  }

  ngOnInit(): void {
  }
}
