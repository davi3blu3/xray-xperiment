import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  public loadingToggle = new BehaviorSubject<boolean>(false);
  public modalToggle = new BehaviorSubject<boolean>(false);

  constructor() {}

  loading(toggle: false) {
    // must pass true to start animation
    this.loadingToggle.next(toggle);
  }
  alert() {
    this.modalToggle.next(true);
    // async stuff
    this.modalToggle.next(false);
  }
  confirm() {
    this.modalToggle.next(true);
    // async stuff
    this.modalToggle.next(false);
  }
  prompt() {
    this.modalToggle.next(true);
    // async stuff
    this.modalToggle.next(false);
  }
}
