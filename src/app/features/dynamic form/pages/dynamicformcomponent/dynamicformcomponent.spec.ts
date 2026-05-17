import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicformcomponent } from './dynamicformcomponent';

describe('Dynamicformcomponent', () => {
  let component: Dynamicformcomponent;
  let fixture: ComponentFixture<Dynamicformcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicformcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicformcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
