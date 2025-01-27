import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { SharedService } from 'src/app/service/shared.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;
  private subscription: Subscription;
  constructor(public personaService: PersonaService, private tokenService: TokenService, private sharedService: SharedService) { }
  isLogged = false;
  isOpen = false; // Tracks whether the component is open or closed


  ngOnInit(): void { 
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
    this.subscription = this.sharedService.toggle$.subscribe((target: string) => {
      if (target === 'acercade') { // Check if the target matches
        this.toggleOpen();
      }
    });
  }

  cargarPersona(){
    this.personaService.detail(2).subscribe(
      data=>{
        this.persona = data
      }
    )
  }
  toggleOpen(): void {
    this.isOpen = !this.isOpen; // Toggles the open/close state
  }
}
