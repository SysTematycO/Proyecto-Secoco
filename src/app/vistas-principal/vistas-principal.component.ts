import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistas-principal',
  templateUrl: './vistas-principal.component.html',
  styleUrls: ['./vistas-principal.component.css']
})
export class VistasPrincipalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ir(usuario: String){
    switch(usuario){
      case "usuario":
        this.route.navigate(['/usuarioVacunacion']);
      break;
      case "personal":
        this.route.navigate(['/personalVacunacion']);
      break;
      case "eps":
        this.route.navigate(['/representanteEps']);
      break;
    }
  }

}
