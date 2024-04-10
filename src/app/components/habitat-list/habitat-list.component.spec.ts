/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HabitatListComponent } from './habitat-list.component';

describe('HabitatListComponent', () => {
  let component: HabitatListComponent;
  let fixture: ComponentFixture<HabitatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
