import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDiariaPersonasVacunarComponent } from './asignacion-diaria-personas-vacunar.component';

describe('AsignacionDiariaPersonasVacunarComponent', () => {
  let component: AsignacionDiariaPersonasVacunarComponent;
  let fixture: ComponentFixture<AsignacionDiariaPersonasVacunarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionDiariaPersonasVacunarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionDiariaPersonasVacunarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
