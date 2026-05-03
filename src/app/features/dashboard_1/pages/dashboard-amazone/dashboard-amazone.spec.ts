import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAmazone } from './dashboard-amazone';

describe('DashboardAmazone', () => {
  let component: DashboardAmazone;
  let fixture: ComponentFixture<DashboardAmazone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAmazone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAmazone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
