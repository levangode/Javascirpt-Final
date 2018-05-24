import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniFaqComponent } from './uni-faq.component';

describe('UniFaqComponent', () => {
  let component: UniFaqComponent;
  let fixture: ComponentFixture<UniFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
