import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { SocialsComponent } from './components/socials/socials.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    SocialsComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
