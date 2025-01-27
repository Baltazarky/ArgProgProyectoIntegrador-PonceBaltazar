import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { SharedService } from 'src/app/service/shared.service';
import { TokenService } from 'src/app/service/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged = false;
  isOpen = false; // Tracks whether the component is open or closed
  private subscription: Subscription;
  constructor(private educacionS: EducacionService, private tokenService: TokenService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.subscription = this.sharedService.toggle$.subscribe((target: string) => {
      if (target === 'educacion') { // Check if the target matches
        this.toggleOpen();
      }
    });
    this.cargarEducacion();
    this.isLogged = !!this.tokenService.getToken();
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    );
  }

  borrar(id: number): void {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },
        err => {
          alert("No fue posible eliminar el campo");
        }
      );
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen; // Toggles the open/close state
  }
}
