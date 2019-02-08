import { XrayApiService } from './../../xray-api.service';
import { Registration } from './../../classes/registration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.scss']
})
export class RegistrationDetailComponent implements OnInit {
  registration: Registration;

  constructor(private service: XrayApiService) {}

  ngOnInit() {
    this.service.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;
    });
  }
}
