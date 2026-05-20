import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProject } from './content-project';

describe('ContentProject', () => {
  let component: ContentProject;
  let fixture: ComponentFixture<ContentProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
