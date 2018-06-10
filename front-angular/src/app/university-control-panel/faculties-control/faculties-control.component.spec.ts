import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesControlComponent } from './faculties-control.component';

describe('FacultiesControlComponent', () => {
  let component: FacultiesControlComponent;
  let fixture: ComponentFixture<FacultiesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
