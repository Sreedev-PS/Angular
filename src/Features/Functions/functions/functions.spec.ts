import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Functions } from './functions';

describe('Functions', () => {
  let component: Functions;
  let fixture: ComponentFixture<Functions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Functions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Functions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
