import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecontectComponent } from './employeecontect.component';

describe('EmployeecontectComponent', () => {
  let component: EmployeecontectComponent;
  let fixture: ComponentFixture<EmployeecontectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecontectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecontectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
