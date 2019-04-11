import { Component, OnInit, Input } from '@angular/core';
import { RadSafety } from '../../classes/rad-safety';

@Component({
  selector: 'app-rad-safety-data',
  templateUrl: './rad-safety-data.component.html',
  styleUrls: ['./rad-safety-data.component.scss']
})
export class RadSafetyDataComponent implements OnInit {
  @Input() radSafety: RadSafety;

  constructor() {}

  ngOnInit() {}
}
