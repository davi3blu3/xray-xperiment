import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdecFooterComponent } from './tdec-footer.component';

describe('TdecFooterComponent', () => {
  let component: TdecFooterComponent;
  let fixture: ComponentFixture<TdecFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdecFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdecFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
