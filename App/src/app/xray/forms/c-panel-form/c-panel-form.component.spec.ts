import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPanelFormComponent } from './c-panel-form.component';

describe('CPanelFormComponent', () => {
  let component: CPanelFormComponent;
  let fixture: ComponentFixture<CPanelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPanelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
