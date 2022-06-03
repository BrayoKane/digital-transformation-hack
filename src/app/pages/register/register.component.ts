import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private _sharedService: SharedService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this._fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  register() {
    this._sharedService.register(this.registrationForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
