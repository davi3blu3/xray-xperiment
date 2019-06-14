import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalOption } from './../../../classes/modal-option';
import { OverlayService } from './../../../services/overlay.service';

@Component({
  selector: 'tdec-modal',
  templateUrl: './tdec-modal.component.html',
  styleUrls: ['./tdec-modal.component.scss']
})
export class TdecModalComponent implements OnInit, OnDestroy {
  options: ModalOption;
  txtPrompt = '';

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    // prevent document.body from scrolling while modal is open
    document.body.classList.add('freeze-scroll');

    this.overlayService.modalOptions.subscribe(options => {
      this.options = options;
    });
  }

  ngOnDestroy() {
    // re-enable body scrolling on close
    document.body.classList.remove('freeze-scroll');
  }

  update(e) {
    this.txtPrompt = e.target.value;
  }

  close(res) {
    this.overlayService.response.next(res);
    this.overlayService.modalToggle.next(false);
  }

  closePrompt(res) {
    this.overlayService.response.next(res);
    this.overlayService.modalToggle.next(false);
  }
}
