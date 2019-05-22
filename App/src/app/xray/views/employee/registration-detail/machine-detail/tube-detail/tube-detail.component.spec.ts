import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeDetailComponent } from './tube-detail.component';

describe('TubeDetailComponent', () => {
  let component: TubeDetailComponent;
  let fixture: ComponentFixture<TubeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
