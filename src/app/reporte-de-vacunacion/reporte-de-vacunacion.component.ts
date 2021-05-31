import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reporte-de-vacunacion',
  templateUrl: './reporte-de-vacunacion.component.html',
  styleUrls: ['./reporte-de-vacunacion.component.css']
})
export class ReporteDeVacunacionComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  servicio() {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post("http://localhost:8081/competitors/reporteVacunacion", {
      lugar: (<HTMLInputElement>document.getElementById("lugar")).value,
      paciente: (<HTMLInputElement>document.getElementById("nombre")).value,
      vacuna: (<HTMLInputElement>document.getElementById("vacuna")).value,
      fecha: (<HTMLInputElement>document.getElementById("fecha")).value,
      hora: (<HTMLInputElement>document.getElementById("hora")).value,
      dosis: (<HTMLInputElement>document.getElementById("dosis")).value
    }, { headers: headers }).subscribe(data => {
      console.log(data);
    });
      (<HTMLInputElement>document.getElementById("lugar")).value = "",
      (<HTMLInputElement>document.getElementById("nombre")).value = "",
      (<HTMLInputElement>document.getElementById("vacuna")).value = "",
      (<HTMLInputElement>document.getElementById("fecha")).value = "",
      (<HTMLInputElement>document.getElementById("hora")).value = "",
      (<HTMLInputElement>document.getElementById("dosis")).value = ""
  }

}
