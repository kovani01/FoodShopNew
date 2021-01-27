import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({ height: '0'})),
      state('final', style({
        height: '193px'
      })),
      transition('initial=>final', animate('400ms')),
      transition('final=>initial', animate('400ms'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
    this.name = '';
    if (this.authService.isLoggedIn()){
      this.value = 'Профіль';
      this.router = '/profile';
    }
    else {
    }
  }
  private elem: any;
  name: string;
  value = 'Вхід';
  router = '/auth';
  currentState = 'initial';

  mouseOver(): void {
    this.elem = document.getElementById('signIn');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut(): void {
    this.elem = document.getElementById('signIn');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }


  changeState(): void {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit(): void {
  }

}
