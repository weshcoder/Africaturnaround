import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WezeshaComponent } from './wezesha.component';

describe('WezeshaComponent', () => {
  let component: WezeshaComponent;
  let fixture: ComponentFixture<WezeshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WezeshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WezeshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
