import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTable } from './dashboard-table';

describe('DashboardTable', () => {
  let component: DashboardTable;
  let fixture: ComponentFixture<DashboardTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
