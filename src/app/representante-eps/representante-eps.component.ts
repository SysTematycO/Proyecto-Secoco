import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-representante-eps',
  templateUrl: './representante-eps.component.html',
  styleUrls: ['./representante-eps.component.css']
})
export class RepresentanteEpsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ir(usuario: String){
    switch(usuario){
      case "Consultar pacientes sin vacunar":
        this.route.navigate(['/PacientesSinVacunar']);
      break;
      case "Consultar citas de vacunación":
        this.route.navigate(['/CitasVacunacionPorFecha']);
      break;
      case "Consultar pacientes vacunados":
        this.route.navigate(['/ConsultarPacientesVacunados']);
      break;
      case "Consultar tasa de vacunación":
        this.route.navigate(['/TasaVacunacionPorFecha']);
      break
      case "Pacientes con síntomas post-vacunación":
        this.route.navigate(['/PacientesSintomasPostVacunacion']);
      break;
    }
}

}
