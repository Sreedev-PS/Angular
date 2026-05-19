import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalModel } from './signal-model';

describe('SignalModel', () => {
  let component: SignalModel;
  let fixture: ComponentFixture<SignalModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
