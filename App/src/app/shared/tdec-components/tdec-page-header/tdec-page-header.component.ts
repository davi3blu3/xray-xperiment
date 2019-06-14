import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tdec-page-header',
  templateUrl: './tdec-page-header.component.html',
  styleUrls: ['./tdec-page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;

  constructor() {}

  ngOnInit() {}
}
