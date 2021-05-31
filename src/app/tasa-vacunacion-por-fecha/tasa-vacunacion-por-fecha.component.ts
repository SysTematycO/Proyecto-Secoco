import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasa-vacunacion-por-fecha',
  templateUrl: './tasa-vacunacion-por-fecha.component.html',
  styleUrls: ['./tasa-vacunacion-por-fecha.component.css']
})
export class TasaVacunacionPorFechaComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  async servicio() {

    var fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    await this.httpClient.get("http://localhost:8081/competitors/tasaDeVacunacionPorFecha/" + fecha).subscribe(data => {
      (<HTMLInputElement>document.getElementById("tasa")).value = data.toString();
    });
  }
}
