import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesSintomasPostVacunacionComponent } from './pacientes-sintomas-post-vacunacion.component';

describe('PacientesSintomasPostVacunacionComponent', () => {
  let component: PacientesSintomasPostVacunacionComponent;
  let fixture: ComponentFixture<PacientesSintomasPostVacunacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesSintomasPostVacunacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesSintomasPostVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
