import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HLbAttDirectives } from './h-lb-att-directive';

describe.only('HLbAttDirectives', () => {
  let component: HLbAttDirectives;
  let fixture: ComponentFixture<HLbAttDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HLbAttDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HLbAttDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
