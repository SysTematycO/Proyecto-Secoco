import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasPrincipalComponent } from './vistas-principal.component';

describe('VistasPrincipalComponent', () => {
  let component: VistasPrincipalComponent;
  let fixture: ComponentFixture<VistasPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistasPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
