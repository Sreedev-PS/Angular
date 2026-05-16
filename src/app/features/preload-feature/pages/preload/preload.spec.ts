import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preload } from './preload';

describe('Preload', () => {
  let component: Preload;
  let fixture: ComponentFixture<Preload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
