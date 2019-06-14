import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerControlsComponent } from './tdec-pager-controls.component';

describe('PagerControlsComponent', () => {
  let component: PagerControlsComponent;
  let fixture: ComponentFixture<PagerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagerControlsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
