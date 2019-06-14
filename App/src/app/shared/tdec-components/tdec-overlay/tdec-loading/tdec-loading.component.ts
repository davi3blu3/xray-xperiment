import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tdec-loading',
  templateUrl: './tdec-loading.component.html',
  styleUrls: ['./tdec-loading.component.scss']
})
export class TdecLoadingComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // prevent document.body from scrolling while modal is open
    document.body.classList.add('freeze-scroll');
  }

  ngOnDestroy() {
    // re-enable body scrolling on close
    document.body.classList.remove('freeze-scroll');
  }
}
