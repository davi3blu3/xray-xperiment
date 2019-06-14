import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';

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

  myRes; // response from confirm modal

  constructor(
    private xrayService: XrayApiService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.xrayService.getRegistration().subscribe((reg: Registration) => {
      this.registration = reg;

      this.pager = new Pager(this.registration.machines.length);
    });
  }

  saveEdit() {
    this.xrayService.postRegistration(this.registration);
  }

  // TESTING MODALS
  runAnimation() {
    this.overlayService.loadingToggle.next(true);
    setTimeout(() => {
      this.overlayService.loadingToggle.next(false);
    }, 3000);
  }

  openAlert() {
    this.overlayService.alert('This is an important ALERT message.');
  }

  openConfirm() {
    this.overlayService.confirm('This is an important CONFIRM message.');
    const confirm = this.overlayService.response
      .pipe(skip(1))
      .subscribe(res => {
        this.myRes = res;
        console.log('the confirm is', this.myRes);
        confirm.unsubscribe();
      });
  }

  openPrompt() {
    this.overlayService.prompt('This is an important PROMPT message.');
    const prompt = this.overlayService.response.pipe(skip(1)).subscribe(res => {
      this.myRes = res;
      console.log('the prompt is', this.myRes);
      prompt.unsubscribe();
    });
  }
}
