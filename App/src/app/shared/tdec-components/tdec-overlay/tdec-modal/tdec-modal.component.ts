import { Component, OnInit } from '@angular/core';

import { ModalOption } from './../../../classes/modal-option';
import { OverlayService } from './../../../services/overlay.service';

@Component({
  selector: 'tdec-modal',
  templateUrl: './tdec-modal.component.html',
  styleUrls: ['./tdec-modal.component.scss']
})
export class TdecModalComponent implements OnInit {
  options: ModalOption;
  txtPrompt = '';

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.modalOptions.subscribe(options => {
      this.options = options;
    });
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
