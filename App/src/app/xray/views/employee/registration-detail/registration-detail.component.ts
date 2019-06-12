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
import { ModalDirective } from './../../../../shared/directives/modal.directive';
import { TdecModalComponent } from './../../../../shared/tdec-components/tdec-modal/tdec-modal.component';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.scss']
})
export class RegistrationDetailComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

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

  // openModal(message) {
  //   const modalFactory = this.resolver.resolveComponentFactory(
  //     TdecModalComponent
  //   );
  //   const vcRef = this.modal.viewContainerRef;
  //   const modalComp = vcRef.createComponent(modalFactory);
  //   this.modalSub = modalComp.instance.response$.subscribe(response => {
  //     this.closeModal(modalComp, response);
  //   });
  // }

  // closeModal(modal, res) {
  //   console.log('close modal response:', res);
  //   modal.destroy();
  //   this.modalSub.unsubscribe();
  // }
}
