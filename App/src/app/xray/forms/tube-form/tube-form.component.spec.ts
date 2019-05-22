import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeFormComponent } from './tube-form.component';

describe('TubeFormComponent', () => {
  let component: TubeFormComponent;
  let fixture: ComponentFixture<TubeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
