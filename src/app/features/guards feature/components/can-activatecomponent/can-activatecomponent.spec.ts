import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivatecomponent } from './can-activatecomponent';

describe('CanActivatecomponent', () => {
  let component: CanActivatecomponent;
  let fixture: ComponentFixture<CanActivatecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActivatecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivatecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
