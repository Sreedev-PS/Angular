import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllowChildComponent } from './not-allow-child-component';

describe('NotAllowChildComponent', () => {
  let component: NotAllowChildComponent;
  let fixture: ComponentFixture<NotAllowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAllowChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAllowChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
