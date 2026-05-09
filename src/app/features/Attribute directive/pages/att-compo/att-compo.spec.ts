import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttCompo } from './att-compo';

describe('AttCompo', () => {
  let component: AttCompo;
  let fixture: ComponentFixture<AttCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
