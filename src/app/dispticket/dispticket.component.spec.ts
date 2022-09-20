import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispticketComponent } from './dispticket.component';

describe('DispticketComponent', () => {
  let component: DispticketComponent;
  let fixture: ComponentFixture<DispticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
