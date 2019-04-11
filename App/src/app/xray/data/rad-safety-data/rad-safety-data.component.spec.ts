import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadSafetyDataComponent } from './rad-safety-data.component';

describe('RadSafetyDataComponent', () => {
  let component: RadSafetyDataComponent;
  let fixture: ComponentFixture<RadSafetyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadSafetyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadSafetyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
