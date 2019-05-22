import { Component, OnInit, Input } from '@angular/core';
import { Tube } from 'src/app/xray/classes/tube';

@Component({
  selector: 'app-tube-detail',
  templateUrl: './tube-detail.component.html',
  styleUrls: ['./tube-detail.component.scss']
})
export class TubeDetailComponent implements OnInit {
  @Input() tube: Tube;
  @Input() regStatus: string;

  editT: boolean;

  constructor() {}

  ngOnInit() {}
}
