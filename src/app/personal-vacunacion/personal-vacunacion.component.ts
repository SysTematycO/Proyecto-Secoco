import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-vacunacion',
  templateUrl: './personal-vacunacion.component.html',
  styleUrls: ['./personal-vacunacion.component.css']
})
export class PersonalVacunacionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ir(usuario: String){
    switch(usuario){
      case "rutasVacunacion":
        this.route.navigate(['/AsignacionRutasVacunacion']);
      break;
      case "asignacionDiaria":
        this.route.navigate(['/AsignacionDiariaPersonasVacunar']);
      break;
      case "reporteUbicacion":
        this.route.navigate(['/UbicacionEnRecorridoDeVacunacion']);
      break;
      case "pacientesVacunados":
        this.route.navigate(['/PacientesVacunadosEnUnPeriodoDeTiempo']);
      break
      case "reporteVacunacion":
        this.route.navigate(['/ReporteDeVacunacion']);
      break;
    }
}
}
