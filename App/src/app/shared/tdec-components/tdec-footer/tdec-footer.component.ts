import { Component, OnInit, Input, ApplicationModule } from '@angular/core';

@Component({
  selector: 'tdec-footer',
  templateUrl: './tdec-footer.component.html',
  styleUrls: ['./tdec-footer.component.scss']
})
export class TdecFooterComponent implements OnInit {
  @Input() appName;
  @Input() appVersion;
  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
