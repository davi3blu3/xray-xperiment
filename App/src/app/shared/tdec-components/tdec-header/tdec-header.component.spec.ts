import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdecHeaderComponent } from './tdec-header.component';

describe('TdecHeaderComponent', () => {
  let component: TdecHeaderComponent;
  let fixture: ComponentFixture<TdecHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdecHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdecHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
