import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor6Component } from './doctor6.component';

describe('Doctor6Component', () => {
  let component: Doctor6Component;
  let fixture: ComponentFixture<Doctor6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
