import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniFacultiesComponent } from './uni-faculties.component';

describe('UniFacultiesComponent', () => {
  let component: UniFacultiesComponent;
  let fixture: ComponentFixture<UniFacultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniFacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
