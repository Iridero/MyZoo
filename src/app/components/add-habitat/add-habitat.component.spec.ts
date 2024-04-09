/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHabitatComponent } from './add-habitat.component';

describe('AddHabitatComponent', () => {
  let component: AddHabitatComponent;
  let fixture: ComponentFixture<AddHabitatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHabitatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
