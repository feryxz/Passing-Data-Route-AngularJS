import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hal1Component } from './hal1.component';

describe('Hal1Component', () => {
  let component: Hal1Component;
  let fixture: ComponentFixture<Hal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
