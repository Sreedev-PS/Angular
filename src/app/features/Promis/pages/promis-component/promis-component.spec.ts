import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisComponent } from './promis-component';

describe('PromisComponent', () => {
  let component: PromisComponent;
  let fixture: ComponentFixture<PromisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
