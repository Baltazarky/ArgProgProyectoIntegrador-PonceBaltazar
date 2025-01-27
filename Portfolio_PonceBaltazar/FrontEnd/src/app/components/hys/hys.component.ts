import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];
  visibleSkills: Skill[] = []; // Lista para las habilidades visibles
  isOpen = false; // Tracks whether the component is open or closed
  private subscription: Subscription;
  isLogged = false;

  itemsPerPage = 3; // Número de cartas visibles por página
  currentPage = 0; // Página actual

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.cargarSkills();
    this.isLogged = !!this.tokenService.getToken();

    this.subscription = this.sharedService.toggle$.subscribe((target: string) => {
      if (target === 'skills') { // Check if the target matches
        this.toggleOpen();
      }
    });
  }

  selectedCard: number | null = null;

  toggleCard(index: number): void {
    this.selectedCard = this.selectedCard === index ? null : index;
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(data => {
      this.skill = data;
      this.updateVisibleSkills(); // Actualiza las habilidades visibles al cargar
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        },
        err => {
          alert("No fue posible eliminar la Habilidad");
        }
      );
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen; // Toggles the open/close state
  }

  // Actualiza las habilidades visibles según la página actual
  updateVisibleSkills(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.visibleSkills = this.skill.slice(start, end);
  }

  // Cambiar a la página anterior
  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleSkills();
    }
  }

  // Cambiar a la página siguiente
  nextPage(): void {
    if ((this.currentPage + 1) * this.itemsPerPage < this.skill.length) {
      this.currentPage++;
      this.updateVisibleSkills();
    }
  }
}
