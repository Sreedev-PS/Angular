import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventhandlercomponent } from './eventhandlercomponent';

describe('Eventhandlercomponent', () => {
  let component: Eventhandlercomponent;
  let fixture: ComponentFixture<Eventhandlercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventhandlercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventhandlercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
