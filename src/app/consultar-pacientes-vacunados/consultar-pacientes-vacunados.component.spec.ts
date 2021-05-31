import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPacientesVacunadosComponent } from './consultar-pacientes-vacunados.component';

describe('ConsultarPacientesVacunadosComponent', () => {
  let component: ConsultarPacientesVacunadosComponent;
  let fixture: ComponentFixture<ConsultarPacientesVacunadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPacientesVacunadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPacientesVacunadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
