import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor5Component } from './doctor5.component';

describe('Doctor5Component', () => {
  let component: Doctor5Component;
  let fixture: ComponentFixture<Doctor5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
