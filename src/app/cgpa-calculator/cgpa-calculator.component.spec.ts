import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgpaCalculatorComponent } from './cgpa-calculator.component';

describe('CgpaCalculatorComponent', () => {
  let component: CgpaCalculatorComponent;
  let fixture: ComponentFixture<CgpaCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgpaCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgpaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
