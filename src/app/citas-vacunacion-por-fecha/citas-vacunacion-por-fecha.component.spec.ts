import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasVacunacionPorFechaComponent } from './citas-vacunacion-por-fecha.component';

describe('CitasVacunacionPorFechaComponent', () => {
  let component: CitasVacunacionPorFechaComponent;
  let fixture: ComponentFixture<CitasVacunacionPorFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasVacunacionPorFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasVacunacionPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
