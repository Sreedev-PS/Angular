import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFlipkart } from './dashboard-flipkart';

describe('DashboardFlipkart', () => {
  let component: DashboardFlipkart;
  let fixture: ComponentFixture<DashboardFlipkart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFlipkart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFlipkart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
