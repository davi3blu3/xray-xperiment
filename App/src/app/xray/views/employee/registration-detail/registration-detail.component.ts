import { Component, OnInit } from '@angular/core';
import { XrayApiService } from '../../../xray-api.service';
import { Registration } from '../../../classes/registration';
import { Pager } from './../../../../shared/classes/pager';

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
  pager: Pager;

  constructor(private service: XrayApiService) {}

  ngOnInit() {
    this.service.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;

      this.pager = new Pager(this.registration.machines.length);
      // console.log('number of machines: ', this.pager.totalItems);
      // console.log('total pages: ', this.pager.totalPages);
      // console.log('slice: ', this.pager.sliceStart, '-', this.pager.sliceEnd);
    });

    // TESTING LOADING ANIMATION
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  saveEdit() {
    this.service.postRegistration(this.registration);
  }
}
