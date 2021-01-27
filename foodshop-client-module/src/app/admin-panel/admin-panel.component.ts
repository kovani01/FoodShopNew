import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private products: ProductService) { }

  ngOnInit(): void {
    let elem;
    let tr;
    let td;
    let td1;
    let td2;
    let tdb;
    let th;
    let z = 0;
    let but1;
    let but2;

    elem = document.getElementById('tbody');
    this.products.getProductsByCategory('433434345').subscribe((d) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        but1 = document.createElement('button');
        but1.innerHTML = 'Edit';
        but2 = document.createElement('button');
        but2.innerHTML = 'Delete';

        tr = document.createElement('tr');
        th = document.createElement('th');
        th.innerHTML = z;
        tr.appendChild(th);
        td = document.createElement('td');
        td.innerHTML = d[i].name;
        tr.appendChild(td);
        td1 = document.createElement('td');
        td1.innerHTML = d[i].price;
        tr.appendChild(td1);
        td2 = document.createElement('td');
        td2.innerHTML = 'Суші';
        tr.appendChild(td2);
        tdb = document.createElement('td');
        tdb.appendChild(but1);
        tdb.appendChild(but2);
        tr.appendChild(tdb);
        elem.appendChild(tr);
        z++;
      }
    });

    this.products.getProductsByCategory('433434344').subscribe((d) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        but1 = document.createElement('button');
        but1.innerHTML = 'Edit';
        but2 = document.createElement('button');
        but2.innerHTML = 'Delete';

        tr = document.createElement('tr');
        th = document.createElement('th');
        th.innerHTML = z;
        tr.appendChild(th);
        td = document.createElement('td');
        td.innerHTML = d[i].name;
        tr.appendChild(td);
        td1 = document.createElement('td');
        td1.innerHTML = d[i].price;
        tr.appendChild(td1);
        td2 = document.createElement('td');
        td2.innerHTML = 'Піца';
        tr.appendChild(td2);
        tdb = document.createElement('td');
        tdb.appendChild(but1);
        tdb.appendChild(but2);
        tr.appendChild(tdb);
        elem.appendChild(tr);
        z++;
      }
    });

    this.products.getProductsByCategory('433434343').subscribe((d) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        but1 = document.createElement('button');
        but1.innerHTML = 'Edit';
        but2 = document.createElement('button');
        but2.innerHTML = 'Delete';

        tr = document.createElement('tr');
        th = document.createElement('th');
        th.innerHTML = z;
        tr.appendChild(th);
        td = document.createElement('td');
        td.innerHTML = d[i].name;
        tr.appendChild(td);
        td1 = document.createElement('td');
        td1.innerHTML = d[i].price;
        tr.appendChild(td1);
        td2 = document.createElement('td');
        td2.innerHTML = 'Бергер';
        tr.appendChild(td2);
        tdb = document.createElement('td');
        tdb.appendChild(but1);
        tdb.appendChild(but2);
        tr.appendChild(tdb);
        elem.appendChild(tr);
        z++;
      }
    });

    this.products.getProductsByCategory('433434342').subscribe((d) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < d.length; i++) {
        but1 = document.createElement('button');
        but1.innerHTML = 'Edit';
        but2 = document.createElement('button');
        but2.innerHTML = 'Delete';

        tr = document.createElement('tr');
        th = document.createElement('th');
        th.innerHTML = z;
        tr.appendChild(th);
        td = document.createElement('td');
        td.innerHTML = d[i].name;
        tr.appendChild(td);
        td1 = document.createElement('td');
        td1.innerHTML = d[i].price;
        tr.appendChild(td1);
        td2 = document.createElement('td');
        td2.innerHTML = 'Напій';
        tr.appendChild(td2);
        tdb = document.createElement('td');
        tdb.appendChild(but1);
        tdb.appendChild(but2);
        tr.appendChild(tdb);
        elem.appendChild(tr);
        z++;
      }
    });

  }

}
