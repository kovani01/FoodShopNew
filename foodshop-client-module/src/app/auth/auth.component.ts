import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout();
  }


  SignIn(username, password): void{
    this.userService.login(
      username,
      password
    ).subscribe((data) => {
      console.log(data);
      this.authService.setLocalStorage(data);
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
      document.getElementById('error').textContent = error.error.msg;
    });
  }

}
