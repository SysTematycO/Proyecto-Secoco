import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.css']
})
export class ConsultarCitaComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  async servicio() {

    var datos;
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    await this.httpClient.get("http://localhost:8081/competitors/consultarCita/" + nombre).subscribe(data => {
      datos = data[0];
        (<HTMLInputElement>document.getElementById("lugar")).value = datos.lugar,
          (<HTMLInputElement>document.getElementById("vacunador")).value = datos.vacunador,
          (<HTMLInputElement>document.getElementById("fecha")).value = datos.fecha,
          (<HTMLInputElement>document.getElementById("hora")).value = datos.hora,
          (<HTMLInputElement>document.getElementById("paciente")).value = datos.paciente
    });
   
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
  }
}
