import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdecLoadingComponent } from './tdec-loading.component';

describe('TdecLoadingComponent', () => {
  let component: TdecLoadingComponent;
  let fixture: ComponentFixture<TdecLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdecLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdecLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
