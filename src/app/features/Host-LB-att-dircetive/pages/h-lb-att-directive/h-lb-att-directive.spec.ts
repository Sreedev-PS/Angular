import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HLbAttDirective } from './h-lb-att-directive';

describe('HLbAttDirective', () => {
  let component: HLbAttDirective;
  let fixture: ComponentFixture<HLbAttDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HLbAttDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HLbAttDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
