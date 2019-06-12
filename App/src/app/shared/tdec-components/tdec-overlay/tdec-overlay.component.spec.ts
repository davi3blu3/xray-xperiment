import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdecOverlayComponent } from './tdec-overlay.component';

describe('TdecOverlayComponent', () => {
  let component: TdecOverlayComponent;
  let fixture: ComponentFixture<TdecOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdecOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdecOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
