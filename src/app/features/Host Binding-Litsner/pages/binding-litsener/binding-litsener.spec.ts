import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingLitsener } from './binding-litsener';

describe('BindingLitsener', () => {
  let component: BindingLitsener;
  let fixture: ComponentFixture<BindingLitsener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingLitsener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingLitsener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
