import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsControlComponent } from './events-control.component';

describe('EventsControlComponent', () => {
  let component: EventsControlComponent;
  let fixture: ComponentFixture<EventsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
