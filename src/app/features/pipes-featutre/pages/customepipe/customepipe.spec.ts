import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customepipe } from './customepipe';

describe('Customepipe', () => {
  let component: Customepipe;
  let fixture: ComponentFixture<Customepipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customepipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customepipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
