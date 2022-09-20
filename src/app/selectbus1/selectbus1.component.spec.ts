import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectbus1Component } from './selectbus1.component';

describe('Selectbus1Component', () => {
  let component: Selectbus1Component;
  let fixture: ComponentFixture<Selectbus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selectbus1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selectbus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
