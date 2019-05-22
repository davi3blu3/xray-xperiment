import { Component, OnInit, Input } from '@angular/core';

import { Registration } from 'src/app/xray/classes/registration';
import { Machine } from './../../../../classes/machine';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.scss']
})
export class MachineDetailComponent implements OnInit {
  @Input() registration: Registration;
  @Input() machine: Machine;

  editCp: boolean;
  viewTubes: boolean;

  constructor() {}

  ngOnInit() {}
}
