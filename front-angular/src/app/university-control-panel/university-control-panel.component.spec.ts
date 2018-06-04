import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityControlPanelComponent } from './university-control-panel.component';

describe('UniversityControlPanelComponent', () => {
  let component: UniversityControlPanelComponent;
  let fixture: ComponentFixture<UniversityControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
