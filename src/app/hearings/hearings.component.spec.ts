import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingsComponent } from './hearings.component';

describe('HearingsComponent', () => {
  let component: HearingsComponent;
  let fixture: ComponentFixture<HearingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
