import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPage } from './router-page';

describe('RouterPage', () => {
  let component: RouterPage;
  let fixture: ComponentFixture<RouterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
