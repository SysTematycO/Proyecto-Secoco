import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesVacunadosEnUnPeriodoDeTiempoComponent } from './pacientes-vacunados-en-un-periodo-de-tiempo.component';

describe('PacientesVacunadosEnUnPeriodoDeTiempoComponent', () => {
  let component: PacientesVacunadosEnUnPeriodoDeTiempoComponent;
  let fixture: ComponentFixture<PacientesVacunadosEnUnPeriodoDeTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesVacunadosEnUnPeriodoDeTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesVacunadosEnUnPeriodoDeTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
