import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  isOpen = false; // Tracks whether the component is open or closed
  private subscription: Subscription;
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private sharedService: SharedService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.subscription = this.sharedService.toggle$.subscribe((target: string) => {
      if (target === 'experiencialaboral') { // Check if the target matches
        this.toggleOpen();
      }
    });
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(
      data => this.expe = data
    )
  }
  
  delete(id: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo eliminar la experiencia");
        }
      )
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen; // Toggles the open/close state
  }
}

