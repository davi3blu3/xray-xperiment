import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadSafetyFormComponent } from './rad-safety-form.component';

describe('RadSafetyFormComponent', () => {
  let component: RadSafetyFormComponent;
  let fixture: ComponentFixture<RadSafetyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadSafetyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadSafetyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
