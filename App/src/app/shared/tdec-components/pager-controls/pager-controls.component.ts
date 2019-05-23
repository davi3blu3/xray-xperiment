import { Component, OnInit, Input } from '@angular/core';
import { Pager } from '../../classes/pager';

@Component({
  selector: 'app-pager-controls',
  templateUrl: './pager-controls.component.html',
  styleUrls: ['./pager-controls.component.scss']
})
export class PagerControlsComponent implements OnInit {
  @Input() pager: Pager;

  constructor() {}

  ngOnInit() {
    console.log(this.pager);
  }

  changePage(num: number) {
    console.log('pager component clicked');
    this.pager.changePage(num);
  }
}
