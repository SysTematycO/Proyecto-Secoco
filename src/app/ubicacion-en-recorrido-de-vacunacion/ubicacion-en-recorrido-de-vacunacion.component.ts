import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion-en-recorrido-de-vacunacion',
  templateUrl: './ubicacion-en-recorrido-de-vacunacion.component.html',
  styleUrls: ['./ubicacion-en-recorrido-de-vacunacion.component.css']
})
export class UbicacionEnRecorridoDeVacunacionComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  servicio() {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post("http://localhost:8081/competitors/ubicacionVacunador", {
      lugarActual: (<HTMLInputElement>document.getElementById("lugarActual")).value,
      vacunador: (<HTMLInputElement>document.getElementById("vacunador")).value,
      fecha: (<HTMLInputElement>document.getElementById("fecha")).value,
      hora: (<HTMLInputElement>document.getElementById("hora")).value
    }, { headers: headers }).subscribe(data => {
      console.log(data);
    });
      (<HTMLInputElement>document.getElementById("lugarActual")).value = "",
      (<HTMLInputElement>document.getElementById("vacunador")).value = "",
      (<HTMLInputElement>document.getElementById("fecha")).value = "",
      (<HTMLInputElement>document.getElementById("hora")).value = ""
  }

}
