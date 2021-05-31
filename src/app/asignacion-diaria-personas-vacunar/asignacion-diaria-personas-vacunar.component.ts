import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-asignacion-diaria-personas-vacunar',
  templateUrl: './asignacion-diaria-personas-vacunar.component.html',
  styleUrls: ['./asignacion-diaria-personas-vacunar.component.css']
})
export class AsignacionDiariaPersonasVacunarComponent implements OnInit {

  constructor(private httpClient: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  async servicio() {

    var datos;

    var vacunador = (<HTMLInputElement>document.getElementById("vacunador")).value;
    var fecha = (<HTMLInputElement>document.getElementById("fecha")).value;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    await this.httpClient.get("http://localhost:8081/competitors/asignacionDiaria/"+vacunador+"/"+fecha).subscribe(data => {
      datos = data[0]
      var primerElemento = (<HTMLInputElement>document.getElementById("tabla"));
      for(let i in data){
        console.log(data[i]);
        if(Number(i)%3==0){
          var cardGroup = this.renderer.createElement("div");
          this.renderer.setAttribute(cardGroup,"class","card-group mt-3");
          this.renderer.appendChild(primerElemento,cardGroup);
        }
          var card = this.renderer.createElement("div");
          this.renderer.setAttribute(card,"class","card text-center border");
          this.renderer.appendChild(cardGroup,card);

          var cardBody = this.renderer.createElement("div");
          this.renderer.setAttribute(cardBody,"class","card-body");
          this.renderer.appendChild(card,cardBody);

          var cardTitle = this.renderer.createElement("h4");
          this.renderer.setAttribute(cardTitle,"class","card-title");
          const titulo = this.renderer.createText('Usuario');
          this.renderer.appendChild(cardTitle,titulo);
          this.renderer.appendChild(cardBody,cardTitle);

          var cardText01 = this.renderer.createElement("p");
          this.renderer.setAttribute(cardText01,"class","card-text");
          const text01 = this.renderer.createText('Lugar: '+ data[i].lugar);
          this.renderer.appendChild(cardText01,text01);
          this.renderer.appendChild(cardBody,cardText01);

          var cardText02 = this.renderer.createElement("p");
          this.renderer.setAttribute(cardText02,"class","card-text");
          const text02 = this.renderer.createText('Fecha: '+ data[i].fecha);
          this.renderer.appendChild(cardText02,text02);
          this.renderer.appendChild(cardBody,cardText02);

          var cardText03 = this.renderer.createElement("p");
          this.renderer.setAttribute(cardText03,"class","card-text");
          const text03 = this.renderer.createText('Hora: '+ data[i].hora);
          this.renderer.appendChild(cardText03,text03);
          this.renderer.appendChild(cardBody,cardText03);
          
          var cardText04 = this.renderer.createElement("p");
          this.renderer.setAttribute(cardText04,"class","card-text");
          const text04 = this.renderer.createText('Paciente: '+ data[i].paciente);
          this.renderer.appendChild(cardText04,text04);
          this.renderer.appendChild(cardBody,cardText04);
          
          var cardText05 = this.renderer.createElement("p");
          this.renderer.setAttribute(cardText05,"class","card-text");
          const text05 = this.renderer.createText('Vacunador: '+ data[i].vacunador);
          this.renderer.appendChild(cardText05,text05);
          this.renderer.appendChild(cardBody,cardText05);
      }

    });
  }
}
