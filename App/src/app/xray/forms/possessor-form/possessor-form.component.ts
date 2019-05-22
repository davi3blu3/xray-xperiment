import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Possessor } from './../../classes/possessor';

@Component({
  selector: 'app-possessor-form',
  templateUrl: './possessor-form.component.html',
  styleUrls: ['./possessor-form.component.scss']
})
export class PossessorFormComponent implements OnInit, OnDestroy {
  @Input() possessor: Possessor;

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({});
    this.form.addControl(
      'name',
      new FormControl(this.possessor.name, Validators.required)
    );
  }

  ngOnDestroy() {
    console.log(this.form.value);
    this.possessor = this.form.value;
    console.log(JSON.stringify(this.possessor));
  }
}
