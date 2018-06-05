import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniEventsComponent } from './uni-events.component';

describe('UniEventsComponent', () => {
  let component: UniEventsComponent;
  let fixture: ComponentFixture<UniEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
