import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteEpsComponent } from './representante-eps.component';

describe('RepresentanteEpsComponent', () => {
  let component: RepresentanteEpsComponent;
  let fixture: ComponentFixture<RepresentanteEpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentanteEpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
