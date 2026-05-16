import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivatedChildComponent } from './can-activated-child-component';

describe('CanActivatedChildComponent', () => {
  let component: CanActivatedChildComponent;
  let fixture: ComponentFixture<CanActivatedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActivatedChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivatedChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
