import { Component, OnInit } from '@angular/core';
import { XrayApiService } from '../../../xray-api.service';
import { Registration } from '../../../classes/registration';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.scss']
})
export class RegistrationDetailComponent implements OnInit {
  registration: Registration;
  editP: boolean;
  editO: boolean;
  editRs: boolean;
  loading: boolean;

  constructor(private service: XrayApiService) {}

  ngOnInit() {
    this.service.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;
    });

    // TESTING LOADING ANIMATION
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  saveEdit() {
    this.service.postRegistration(this.registration);
  }
}
