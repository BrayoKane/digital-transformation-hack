import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileDetails;

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.getUserProfileDetails();
  }

  getUserProfileDetails() {
    this._sharedService.getUserProfileDetails().subscribe(res => {
      this.userProfileDetails = res['details'];
      console.log(res);
    });
  }

}
