import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  error = false;
  userName: string;

  password = '';
  repeat = '';

  userForm: FormGroup = new FormGroup({
    userLogin: new FormControl('', Validators.required),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userAddress: new FormControl('', Validators.required),
    userPhone: new FormControl('')
  });

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {

    this.userId = this.authService.getUserId();
    this.userService.getUserById(this.userId).subscribe(
      (data) => {
        this.userForm.controls.userLogin.setValue(data.login);
        this.userForm.controls.userEmail.setValue(data.email);
        this.userForm.controls.userAddress.setValue(data.address);
        this.userForm.controls.userPhone.setValue(data.phoneNumber);
        this.userName = data.firstName;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  ngOnInit(): void { }

  submit() {
    // console.log(this.userForm);
    console.log(this.password);
    console.log(this.repeat);

    if (this.changePass()) {
      if (this.passValid()){
        // console.log('change, valid');
        this.userService.changePassword(this.authService.getUserId(), this.password)
        .subscribe(
          (data) => {this.password = ''; this.repeat = ''; },
          err => console.log(err)
        );
      }
    }

    this.userService.changeAll(
      this.userId,
      this.userName,
      this.userForm.controls.userLogin.value,
      this.userForm.controls.userEmail.value,
      this.userForm.controls.userPhone.value,
      this.userForm.controls.userAddress.value
    ).subscribe(
      data => alert('Saved'),
      err => alert('Saving error: ' + err)
    );
  }

  changePass(): boolean {
    if (this.password.length == 0 && this.repeat.length == 0) {
      return false;
    }
    return true;
  }

  passValid(): boolean {
    if (this.password == this.repeat && this.password.length > 4) {
      return true;
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
