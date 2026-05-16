import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateformcomponent } from './templateformcomponent';

describe('Templateformcomponent', () => {
  let component: Templateformcomponent;
  let fixture: ComponentFixture<Templateformcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templateformcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateformcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
