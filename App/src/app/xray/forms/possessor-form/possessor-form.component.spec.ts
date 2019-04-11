import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessorFormComponent } from './possessor-form.component';

describe('PossessorFormComponent', () => {
  let component: PossessorFormComponent;
  let fixture: ComponentFixture<PossessorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
