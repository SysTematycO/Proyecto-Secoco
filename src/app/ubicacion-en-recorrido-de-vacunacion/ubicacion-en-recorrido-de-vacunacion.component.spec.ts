import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionEnRecorridoDeVacunacionComponent } from './ubicacion-en-recorrido-de-vacunacion.component';

describe('UbicacionEnRecorridoDeVacunacionComponent', () => {
  let component: UbicacionEnRecorridoDeVacunacionComponent;
  let fixture: ComponentFixture<UbicacionEnRecorridoDeVacunacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionEnRecorridoDeVacunacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionEnRecorridoDeVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
