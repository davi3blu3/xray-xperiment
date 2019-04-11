import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../../classes/owner';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.scss']
})
export class OwnerDataComponent implements OnInit {
  @Input() owner: Owner;

  constructor() {}

  ngOnInit() {}
}
