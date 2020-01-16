import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionLastComponent } from './solution-last.component';

describe('SolutionLastComponent', () => {
  let component: SolutionLastComponent;
  let fixture: ComponentFixture<SolutionLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
