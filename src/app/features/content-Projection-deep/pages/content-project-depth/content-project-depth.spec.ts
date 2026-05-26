import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectDepth } from './content-project-depth';

describe('ContentProjectDepth', () => {
  let component: ContentProjectDepth;
  let fixture: ComponentFixture<ContentProjectDepth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectDepth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectDepth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
