import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachingComponent } from './attaching-component';

describe('AttachingComponent', () => {
  let component: AttachingComponent;
  let fixture: ComponentFixture<AttachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
