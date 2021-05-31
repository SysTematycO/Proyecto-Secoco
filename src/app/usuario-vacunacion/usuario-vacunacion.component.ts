import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-vacunacion',
  templateUrl: './usuario-vacunacion.component.html',
  styleUrls: ['./usuario-vacunacion.component.css']
})
export class UsuarioVacunacionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ir(usuario: String){
    switch(usuario){
      case "agendar":
        this.route.navigate(['/agendarCita']);
      break;
      case "consultar":
        this.route.navigate(['/consultarCita']);
      break;
      case "reportarSintomas":
        this.route.navigate(['/reportarSintomas']);
      break;
    }
}
}
