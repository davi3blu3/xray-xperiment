import { Component, OnInit, Input } from '@angular/core';
import { Machine } from './../../classes/machine';
import { ControlPanel } from '../../classes/control-panel';

@Component({
  selector: 'app-c-panel-data',
  templateUrl: './c-panel-data.component.html',
  styleUrls: ['./c-panel-data.component.scss']
})
export class CPanelDataComponent implements OnInit {
  @Input() machine: Machine;

  constructor() {}

  ngOnInit() {}
}
