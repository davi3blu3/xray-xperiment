import { Possessor } from './../../classes/possessor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-possessor-data',
  templateUrl: './possessor-data.component.html',
  styleUrls: ['./possessor-data.component.scss']
})
export class PossessorDataComponent implements OnInit {
  @Input() possessor: Possessor;

  constructor() {}

  ngOnInit() {}
}
