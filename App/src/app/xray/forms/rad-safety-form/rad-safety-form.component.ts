import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RadSafety } from '../../classes/rad-safety';

@Component({
  selector: 'app-rad-safety-form',
  templateUrl: './rad-safety-form.component.html',
  styleUrls: ['./rad-safety-form.component.scss']
})
export class RadSafetyFormComponent implements OnInit {
  @Input() radSafety: RadSafety;

  constructor() {}

  ngOnInit() {}
}
