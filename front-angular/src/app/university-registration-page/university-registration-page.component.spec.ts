import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRegistrationPageComponent } from './university-registration-page.component';

describe('UniversityRegistrationPageComponent', () => {
  let component: UniversityRegistrationPageComponent;
  let fixture: ComponentFixture<UniversityRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
