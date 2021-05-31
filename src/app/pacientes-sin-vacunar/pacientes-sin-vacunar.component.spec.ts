import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesSinVacunarComponent } from './pacientes-sin-vacunar.component';

describe('PacientesSinVacunarComponent', () => {
  let component: PacientesSinVacunarComponent;
  let fixture: ComponentFixture<PacientesSinVacunarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesSinVacunarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesSinVacunarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
