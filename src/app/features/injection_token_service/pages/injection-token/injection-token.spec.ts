import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionToken } from './injection-token';

describe('InjectionToken', () => {
  let component: InjectionToken;
  let fixture: ComponentFixture<InjectionToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionToken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
