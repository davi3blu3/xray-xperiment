import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeDataComponent } from './tube-data.component';

describe('TubeDataComponent', () => {
  let component: TubeDataComponent;
  let fixture: ComponentFixture<TubeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
