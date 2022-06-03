import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SweetAlertService} from '../../shared/services/sweet-alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private _sharedService: SharedService, private _fb: FormBuilder,
              private _sweetAlertService: SweetAlertService,
              private _router: Router) {
  }

  ngOnInit() {
    this.registrationForm = this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        name: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required],
      },
      {
        validator: this.MustMatch('password', 'confirm_password')  // check if the passwords are same
      });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  register() {
    this._sharedService.register(this.registrationForm.value).subscribe(res => {
      this._sweetAlertService.showSuccessAlert(res['details']);
      this._router.navigate(['/login']);
    }, err => {
      window.alert(err.error.details);
      this._sweetAlertService.showErrorAlert(err.error.details);
    });
  }

}
