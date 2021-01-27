import {Component, destroyPlatform, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  value: any = null;
  count: number = null;
  sum: number = null;
  id: string = null;

  constructor() { }

  Remove(): void{
    document.getElementById(this.id).style.display = 'none';
  }

  AddProdCount(): void{
    this.count = this.count + 1;
    this.sum = this.count * this.value.price;
  }

  MinusProdCount(): void{
    this.count = this.count - 1;
    this.sum = this.count * this.value.price;
    if (this.count === 0){
      this.Remove();
    }
  }

  Makeid(length): string{
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  ngOnInit(): void {
    this.id = this.Makeid(5);
  }
}
