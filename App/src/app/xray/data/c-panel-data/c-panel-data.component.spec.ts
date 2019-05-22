import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPanelDataComponent } from './c-panel-data.component';

describe('CPanelDataComponent', () => {
  let component: CPanelDataComponent;
  let fixture: ComponentFixture<CPanelDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPanelDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPanelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
