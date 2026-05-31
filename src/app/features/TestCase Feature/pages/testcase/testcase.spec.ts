import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcase } from './testcase';

describe('Testcase', () => {
  let component: Testcase;
  let fixture: ComponentFixture<Testcase>;

  it('increment Counter',()=>{
    component.addCounter()
    expect(component.counter).toBe(1)
  })

  it('decrement Counter',()=>{
    component.decreaseCounter()
    expect(component.counter).toBe(-1)

  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
