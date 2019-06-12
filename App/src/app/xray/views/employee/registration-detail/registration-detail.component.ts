import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { XrayApiService } from '../../../xray-api.service';
import { OverlayService } from './../../../../shared/services/overlay.service';

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

  // currentContainerRef;
  modalSub;

  constructor(
    private xrayService: XrayApiService,
    private overlayService: OverlayService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.xrayService.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;

      this.pager = new Pager(this.registration.machines.length);
    });

    // Testing Load animation
    this.overlayService.loadingToggle.next(true);
    setTimeout(() => {
      this.overlayService.loadingToggle.next(false);
    }, 5000);
  }

  saveEdit() {
    this.xrayService.postRegistration(this.registration);
  }
}
