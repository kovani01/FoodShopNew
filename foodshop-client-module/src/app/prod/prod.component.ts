import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ProductComponent} from '../layout/product/product.component';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  @ViewChild('contSushi', {read: ViewContainerRef}) contSushi: ViewContainerRef;
  @ViewChild('contPizza', {read: ViewContainerRef}) contPizza: ViewContainerRef;
  @ViewChild('contBurgers', {read: ViewContainerRef}) contBurgers: ViewContainerRef;
  @ViewChild('contDrinks', {read: ViewContainerRef}) contDrinks: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private products: ProductService) {}

  ngOnInit(): void {
  }


  ClickSu(): void{
    this.products.getProductsByCategory('433434345').subscribe((d) => {
      this.contSushi.clear();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        let sushiComponent;
        let sushiComponentRef;

        sushiComponent = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        sushiComponentRef = this.contSushi.createComponent(sushiComponent);
        sushiComponentRef.instance.value = {prodName: d[i].name, price: d[i].price, link: d[i].imagePath, count: 1, category: 'Суші - '};
      }
    }, (error) => {console.log(error); });
  }

  ClickP(): void{
    this.products.getProductsByCategory('433434344').subscribe((d) => {
      this.contPizza.clear();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        let pizzaComponent;
        let pizzaComponentRef;

        pizzaComponent = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        pizzaComponentRef = this.contPizza.createComponent(pizzaComponent);
        pizzaComponentRef.instance.value = {prodName: d[i].name, price: d[i].price, link: d[i].imagePath, count: 1, category: 'Піца - '};
      }
    }, (error) => {console.log(error); });
  }

  ClickB(): void{
    this.products.getProductsByCategory('433434343').subscribe((d) => {
      this.contBurgers.clear();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        let burgerComponent;
        let burgerComponentRef;

        burgerComponent = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        burgerComponentRef = this.contBurgers.createComponent(burgerComponent);
        burgerComponentRef.instance.value = {prodName: d[i].name, price: d[i].price, link: d[i].imagePath, count: 1, category: 'Бургер - '};
      }
    }, (error) => {console.log(error); });
  }

  ClickD(): void{
    this.products.getProductsByCategory('433434342').subscribe((d) => {
      this.contDrinks.clear();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        let drinkComponent;
        let drinkComponentRef;

        drinkComponent = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        drinkComponentRef = this.contDrinks.createComponent(drinkComponent);
        drinkComponentRef.instance.value = {prodName: d[i].name, price: d[i].price, link: d[i].imagePath, count: 1, category: 'Напій - '};
      }
    }, (error) => {console.log(error); });
  }
}
