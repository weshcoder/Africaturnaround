import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsConsoltunciesComponent } from './jobs-consoltuncies.component';

describe('JobsConsoltunciesComponent', () => {
  let component: JobsConsoltunciesComponent;
  let fixture: ComponentFixture<JobsConsoltunciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsConsoltunciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsConsoltunciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
