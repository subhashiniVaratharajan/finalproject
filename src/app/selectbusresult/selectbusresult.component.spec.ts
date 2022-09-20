import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbusresultComponent } from './selectbusresult.component';

describe('SelectbusresultComponent', () => {
  let component: SelectbusresultComponent;
  let fixture: ComponentFixture<SelectbusresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectbusresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectbusresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
