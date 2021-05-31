import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioVacunacionComponent } from './usuario-vacunacion.component';

describe('UsuarioVacunacionComponent', () => {
  let component: UsuarioVacunacionComponent;
  let fixture: ComponentFixture<UsuarioVacunacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioVacunacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
