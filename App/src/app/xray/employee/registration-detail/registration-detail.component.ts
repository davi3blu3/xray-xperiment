import { Component, OnInit } from '@angular/core';
import { XrayApiService } from './../../xray-api.service';
import { Registration } from './../../classes/registration';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.scss']
})
export class RegistrationDetailComponent implements OnInit {
  registration: Registration;
  editP = false;

  constructor(private service: XrayApiService) {}

  ngOnInit() {
    this.service.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;
    });
  }

  saveEdit() {
    this.service.postRegistration(this.registration);
  }
}
