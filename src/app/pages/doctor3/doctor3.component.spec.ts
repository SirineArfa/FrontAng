import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor3Component } from './doctor3.component';

describe('Doctor3Component', () => {
  let component: Doctor3Component;
  let fixture: ComponentFixture<Doctor3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
