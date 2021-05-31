import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-vacunados-en-un-periodo-de-tiempo',
  templateUrl: './pacientes-vacunados-en-un-periodo-de-tiempo.component.html',
  styleUrls: ['./pacientes-vacunados-en-un-periodo-de-tiempo.component.css']
})
export class PacientesVacunadosEnUnPeriodoDeTiempoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  async servicio() {

    var fechaInicial = (<HTMLInputElement>document.getElementById("fechaIncial")).value;
    var fechaFinal = (<HTMLInputElement>document.getElementById("fechaFinal")).value;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    await this.httpClient.get("http://localhost:8081/competitors/pacientesVacunadosPeriodoDeTiempo/" + fechaInicial +"/"+fechaFinal).subscribe(data => {
        (<HTMLInputElement>document.getElementById("pacientes")).value = data.toString();
    });
  }
}
