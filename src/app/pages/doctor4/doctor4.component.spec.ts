import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor4Component } from './doctor4.component';

describe('Doctor4Component', () => {
  let component: Doctor4Component;
  let fixture: ComponentFixture<Doctor4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
