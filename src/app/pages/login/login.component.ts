import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SharedService} from '../../shared/services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm : FormGroup;


  constructor(
    private _sharedService : SharedService,
    private _fb : FormBuilder,
    private _router : Router
  ) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  login(){
  console.log('login Button Click');

    this._sharedService.login(this.loginForm.value).subscribe(res => {
      console.log('Login Successful', res);
      localStorage.setItem('loginStatus', '1');
      localStorage.setItem('jwt', res['details']['jwt']);
      localStorage.setItem('refresh_token', res['details']['refresh_token']);
      localStorage.setItem('access_token', res['details']['access_token']);
      localStorage.setItem('expiry_time', res['details']['expires_in']);


      this._router.navigate(['/profile']);


    })
  }
  ngOnDestroy() {
  }

}
