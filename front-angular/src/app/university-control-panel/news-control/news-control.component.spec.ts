import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsControlComponent } from './news-control.component';

describe('NewsControlComponent', () => {
  let component: NewsControlComponent;
  let fixture: ComponentFixture<NewsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
