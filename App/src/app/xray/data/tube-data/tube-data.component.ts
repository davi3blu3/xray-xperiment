import { Component, OnInit, Input } from '@angular/core';
import { Tube } from './../../classes/tube';

@Component({
  selector: 'app-tube-data',
  templateUrl: './tube-data.component.html',
  styleUrls: ['./tube-data.component.scss']
})
export class TubeDataComponent implements OnInit {
  @Input() tube: Tube;

  constructor() {}

  ngOnInit() {}
}
