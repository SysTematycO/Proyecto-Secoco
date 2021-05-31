import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportar-sintomas',
  templateUrl: './reportar-sintomas.component.html',
  styleUrls: ['./reportar-sintomas.component.css']
})
export class ReportarSintomasComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  servicio() {

    var listaDeSintomas = ""

    if((<HTMLInputElement>document.getElementById("fiebre")).checked){
      listaDeSintomas += "Fiebre" + ", ";
    }
    if((<HTMLInputElement>document.getElementById("tos")).checked){
      listaDeSintomas += "Tos seca" + ", ";
    }
    if((<HTMLInputElement>document.getElementById("cansancio")).checked){
      listaDeSintomas += "Cansancio" + ", ";
    }
    if((<HTMLInputElement>document.getElementById("garganta")).checked){
      listaDeSintomas += "Dolor de garganta" + ", ";
    }
    if((<HTMLInputElement>document.getElementById("diarrea")).checked){
      listaDeSintomas += "Diarrea" + ", ";
    }
    if((<HTMLInputElement>document.getElementById("molestias")).checked){
      listaDeSintomas += "Molestias y dolores" + ", ";
    }
    listaDeSintomas = listaDeSintomas.substring(0,listaDeSintomas.length-2);
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post("http://localhost:8081/competitors/reportarSintomasVacunacion", {
      listaDeSintomas: listaDeSintomas,
      paciente: (<HTMLInputElement>document.getElementById("nombre")).value,
      fecha: (<HTMLInputElement>document.getElementById("fecha")).value,
      hora: (<HTMLInputElement>document.getElementById("hora")).value
    }, { headers: headers }).subscribe(data => {
      console.log(data);
    });
    (<HTMLInputElement>document.getElementById("fiebre")).checked = false;
    (<HTMLInputElement>document.getElementById("tos")).checked = false;
    (<HTMLInputElement>document.getElementById("cansancio")).checked = false;
    (<HTMLInputElement>document.getElementById("garganta")).checked = false;
    (<HTMLInputElement>document.getElementById("diarrea")).checked = false;
    (<HTMLInputElement>document.getElementById("molestias")).checked = false;
    (<HTMLInputElement>document.getElementById("nombre")).value ="";
    (<HTMLInputElement>document.getElementById("fecha")).value ="";
    (<HTMLInputElement>document.getElementById("hora")).value ="";
  }
}
