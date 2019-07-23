import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpGenComponent } from './otp-gen.component';

describe('OtpGenComponent', () => {
  let component: OtpGenComponent;
  let fixture: ComponentFixture<OtpGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpGenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
