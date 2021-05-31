import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})

export class AgendarCitaComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  servicio() {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post("http://localhost:8081/competitors/agendarCita", {
      lugar: (<HTMLInputElement>document.getElementById("lugar")).value,
      paciente: (<HTMLInputElement>document.getElementById("nombre")).value,
      vacunador: (<HTMLInputElement>document.getElementById("vacunador")).value,
      fecha: (<HTMLInputElement>document.getElementById("fecha")).value,
      hora: (<HTMLInputElement>document.getElementById("hora")).value
    }, { headers: headers }).subscribe(data => {
      console.log(data);
    });
      (<HTMLInputElement>document.getElementById("lugar")).value = "",
      (<HTMLInputElement>document.getElementById("nombre")).value = "",
      (<HTMLInputElement>document.getElementById("vacunador")).value = "",
      (<HTMLInputElement>document.getElementById("fecha")).value = "",
      (<HTMLInputElement>document.getElementById("hora")).value = ""
  }
}
