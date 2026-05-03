import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDomView } from './signal-dom-view';

describe('SignalDomView', () => {
  let component: SignalDomView;
  let fixture: ComponentFixture<SignalDomView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDomView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDomView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
