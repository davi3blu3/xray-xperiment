import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tdec-header',
  templateUrl: './tdec-header.component.html',
  styleUrls: ['./tdec-header.component.scss']
})
export class TdecHeaderComponent implements OnInit {
  @Input() appName;

  constructor() {}

  ngOnInit() {}
}
