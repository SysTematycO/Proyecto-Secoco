import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeVacunacionComponent } from './reporte-de-vacunacion.component';

describe('ReporteDeVacunacionComponent', () => {
  let component: ReporteDeVacunacionComponent;
  let fixture: ComponentFixture<ReporteDeVacunacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDeVacunacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
