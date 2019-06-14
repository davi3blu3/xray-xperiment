import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdecModalComponent } from './tdec-modal.component';

describe('TdecModalComponent', () => {
  let component: TdecModalComponent;
  let fixture: ComponentFixture<TdecModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdecModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdecModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
