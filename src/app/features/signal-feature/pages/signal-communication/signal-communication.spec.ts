import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCommunication } from './signal-communication';

describe('SignalCommunication', () => {
  let component: SignalCommunication;
  let fixture: ComponentFixture<SignalCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
