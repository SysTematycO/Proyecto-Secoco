import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaVacunacionPorFechaComponent } from './tasa-vacunacion-por-fecha.component';

describe('TasaVacunacionPorFechaComponent', () => {
  let component: TasaVacunacionPorFechaComponent;
  let fixture: ComponentFixture<TasaVacunacionPorFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaVacunacionPorFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasaVacunacionPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
