import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivedSignal } from './derived-signal';

describe('DerivedSignal', () => {
  let component: DerivedSignal;
  let fixture: ComponentFixture<DerivedSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivedSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivedSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
