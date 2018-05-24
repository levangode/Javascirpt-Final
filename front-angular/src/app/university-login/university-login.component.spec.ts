import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityLoginComponent } from './university-login.component';

describe('UniversityLoginComponent', () => {
  let component: UniversityLoginComponent;
  let fixture: ComponentFixture<UniversityLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
