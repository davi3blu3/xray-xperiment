import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessorDataComponent } from './possessor-data.component';

describe('PossessorDataComponent', () => {
  let component: PossessorDataComponent;
  let fixture: ComponentFixture<PossessorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
