import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hal2Component } from './hal2.component';

describe('Hal2Component', () => {
  let component: Hal2Component;
  let fixture: ComponentFixture<Hal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
