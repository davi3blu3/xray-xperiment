import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ModalOption } from '../classes/modal-option';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  public loadingToggle = new BehaviorSubject<boolean>(false);
  public modalToggle = new BehaviorSubject<boolean>(false);
  public modalOptions = new BehaviorSubject<ModalOption>({
    message: '',
    btn1Txt: '',
    btn2Txt: '',
    modalType: ''
  });
  public response = new BehaviorSubject<any>('');

  constructor() {}

  alert(message: string, btnTxt: string = 'Ok') {
    this.modalToggle.next(true);

    // create modal
    this.modalOptions.next({
      message: message,
      btn1Txt: btnTxt,
      btn2Txt: '',
      modalType: 'Alert'
    });
  }

  confirm(message: string, btn1Txt: string = 'Ok', btn2Txt: string = 'Cancel') {
    console.log('service - confirm called');
    this.modalToggle.next(true);

    // create modal
    this.modalOptions.next({
      message: message,
      btn1Txt: btn1Txt,
      btn2Txt: btn2Txt,
      modalType: 'Confirm'
    });
  }

  prompt(message: string, btn1Txt: string = 'Submit') {
    console.log('service - prompt called');
    this.modalToggle.next(true);

    // create modal
    this.modalOptions.next({
      message: message,
      btn1Txt: btn1Txt,
      btn2Txt: '',
      modalType: 'Prompt'
    });
  }
}
