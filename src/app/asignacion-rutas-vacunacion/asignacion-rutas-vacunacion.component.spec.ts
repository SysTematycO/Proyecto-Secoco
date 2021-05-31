import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRutasVacunacionComponent } from './asignacion-rutas-vacunacion.component';

describe('AsignacionRutasVacunacionComponent', () => {
  let component: AsignacionRutasVacunacionComponent;
  let fixture: ComponentFixture<AsignacionRutasVacunacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionRutasVacunacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionRutasVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
