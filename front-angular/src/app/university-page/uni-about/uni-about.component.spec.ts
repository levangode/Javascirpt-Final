import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniAboutComponent } from './uni-about.component';

describe('UniAboutComponent', () => {
  let component: UniAboutComponent;
  let fixture: ComponentFixture<UniAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
