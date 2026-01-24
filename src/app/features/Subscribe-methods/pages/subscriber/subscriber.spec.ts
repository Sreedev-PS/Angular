import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriber } from './subscriber';

describe('Subscriber', () => {
  let component: Subscriber;
  let fixture: ComponentFixture<Subscriber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subscriber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscriber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
