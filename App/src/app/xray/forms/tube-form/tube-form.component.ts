import { Component, OnInit, Input } from '@angular/core';
import { Tube } from './../../classes/tube';

@Component({
  selector: 'app-tube-form',
  templateUrl: './tube-form.component.html',
  styleUrls: ['./tube-form.component.scss']
})
export class TubeFormComponent implements OnInit {
  @Input() tube: Tube;

  constructor() {}

  ngOnInit() {}
}
