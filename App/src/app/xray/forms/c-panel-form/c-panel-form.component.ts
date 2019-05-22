import { Machine } from './../../classes/machine';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-panel-form',
  templateUrl: './c-panel-form.component.html',
  styleUrls: ['./c-panel-form.component.scss']
})
export class CPanelFormComponent implements OnInit {
  @Input() machine: Machine;

  constructor() {}

  ngOnInit() {}
}
