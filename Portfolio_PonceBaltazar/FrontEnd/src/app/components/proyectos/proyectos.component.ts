import { Component, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit  {
  isOpen = false; // Tracks whether the component is open or closed
  private subscription: Subscription;
  containers = [
    {
      title: 'Portfolio Argentina Programa',
      description: 'El portfolio personal de YoProgramo del curso de Programador Web Full Stack de Argentina Programa es mi primer proyecto concluido.',
      image: '../../../assets/APLogo_purple.png',
      link: 'https://github.com/Baltazarky/ArgProgProyectoIntegrador-PonceBaltazar'
    },
    {
      title: 'Hesoyam',
      description: 'Sistema hecho en Python usando principalmente las librerias de Binance y TradingView. Cuenta con dos funciones, una para la alza y otra para la baja...',
      image: '../../../assets/hesoyam.png',
      link: 'https://github.com/Baltazarky/Hesoyam'
    },
    {
      title: 'Juego Flash C++',
      description: 'Proyecto final de la asignatura de Programación Orientada a Objetos. Pequeño juego hecho con la libreria Flash de C++ inspirado en Megaman.',
      image: '../../../assets/rabbit_sprite.png',
      link: 'https://github.com/Baltazarky/Juego-SFMLCpp-POO'
    },
    {
      title: 'Colores Profundos',
      description: 'Proyecto resultado de mi primer GlobalGameJam cuya temática anual era "Burbujas". Asumí el rol de programador donde aprendí a usar Unity.',
      image: '../../../assets/yellow_submarine.png',
      link: 'https://globalgamejam.org/games/2025/colores-profundos-5'
    }
  ];
  currentIndex = 0;

  constructor(private sharedService: SharedService){ }

  ngOnInit(): void {
    this.subscription = this.sharedService.toggle$.subscribe((target: string) => {
      if (target === 'proyectos') { // Check if the target matches
        this.toggleOpen();
      }
    });
  }

  nextContainer() {
    this.currentIndex = (this.currentIndex + 1) % this.containers.length;
  }
  toggleOpen(): void {
    this.isOpen = !this.isOpen; // Toggles the open/close state
  }
}


