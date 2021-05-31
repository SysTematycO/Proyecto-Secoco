import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistasPrincipalComponent } from './vistas-principal/vistas-principal.component';
import { UsuarioVacunacionComponent } from './usuario-vacunacion/usuario-vacunacion.component';
import { PersonalVacunacionComponent } from './personal-vacunacion/personal-vacunacion.component';
import { RepresentanteEpsComponent } from './representante-eps/representante-eps.component';
import { RouterModule } from '@angular/router';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import { ReportarSintomasComponent } from './reportar-sintomas/reportar-sintomas.component';
import { HttpClientModule } from '@angular/common/http';
import { AsignacionDiariaPersonasVacunarComponent } from './asignacion-diaria-personas-vacunar/asignacion-diaria-personas-vacunar.component';
import { AsignacionRutasVacunacionComponent } from './asignacion-rutas-vacunacion/asignacion-rutas-vacunacion.component';
import { PacientesVacunadosEnUnPeriodoDeTiempoComponent } from './pacientes-vacunados-en-un-periodo-de-tiempo/pacientes-vacunados-en-un-periodo-de-tiempo.component';
import { ReporteDeVacunacionComponent } from './reporte-de-vacunacion/reporte-de-vacunacion.component';
import { UbicacionEnRecorridoDeVacunacionComponent } from './ubicacion-en-recorrido-de-vacunacion/ubicacion-en-recorrido-de-vacunacion.component';
import { PacientesSinVacunarComponent } from './pacientes-sin-vacunar/pacientes-sin-vacunar.component';
import { CitasVacunacionPorFechaComponent } from './citas-vacunacion-por-fecha/citas-vacunacion-por-fecha.component';
import { ConsultarPacientesVacunadosComponent } from './consultar-pacientes-vacunados/consultar-pacientes-vacunados.component';
import { TasaVacunacionPorFechaComponent } from './tasa-vacunacion-por-fecha/tasa-vacunacion-por-fecha.component';
import { PacientesSintomasPostVacunacionComponent } from './pacientes-sintomas-post-vacunacion/pacientes-sintomas-post-vacunacion.component';

@NgModule({
  declarations: [
    AppComponent,
    VistasPrincipalComponent,
    UsuarioVacunacionComponent,
    PersonalVacunacionComponent,
    RepresentanteEpsComponent,
    AgendarCitaComponent,
    ConsultarCitaComponent,
    ReportarSintomasComponent,
    AsignacionDiariaPersonasVacunarComponent,
    AsignacionRutasVacunacionComponent,
    UbicacionEnRecorridoDeVacunacionComponent,
    PacientesVacunadosEnUnPeriodoDeTiempoComponent,
    ReporteDeVacunacionComponent,
    PacientesSinVacunarComponent,
    CitasVacunacionPorFechaComponent,
    ConsultarPacientesVacunadosComponent,
    TasaVacunacionPorFechaComponent,
    PacientesSintomasPostVacunacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'usuarioVacunacion', component: UsuarioVacunacionComponent},
      {path: 'personalVacunacion', component: PersonalVacunacionComponent},
      {path: 'representanteEps', component: RepresentanteEpsComponent},
      {path: 'agendarCita', component: AgendarCitaComponent},
      {path: 'consultarCita', component: ConsultarCitaComponent},
      {path: 'reportarSintomas', component: ReportarSintomasComponent},
      {path: '', component: VistasPrincipalComponent},
      {path: 'AsignacionDiariaPersonasVacunar', component: AsignacionDiariaPersonasVacunarComponent},
      {path: 'AsignacionRutasVacunacion', component: AsignacionRutasVacunacionComponent},
      {path: 'UbicacionEnRecorridoDeVacunacion', component: UbicacionEnRecorridoDeVacunacionComponent},
      {path: 'PacientesVacunadosEnUnPeriodoDeTiempo', component: PacientesVacunadosEnUnPeriodoDeTiempoComponent},
      {path: 'ReporteDeVacunacion', component: ReporteDeVacunacionComponent},
      {path: 'PacientesSinVacunar', component: PacientesSinVacunarComponent},
      {path: 'CitasVacunacionPorFecha', component: CitasVacunacionPorFechaComponent},
      {path: 'ConsultarPacientesVacunados', component: ConsultarPacientesVacunadosComponent},
      {path: 'TasaVacunacionPorFecha', component: TasaVacunacionPorFechaComponent},
      {path: 'PacientesSintomasPostVacunacion', component: PacientesSintomasPostVacunacionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
