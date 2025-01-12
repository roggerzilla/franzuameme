import { Component,AfterViewInit  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000; // Intervalo entre transiciones
    config.wrap = true; // Hacer que el carrusel se repita
    config.keyboard = true; // Controlar el carrusel con el teclado
  }
  icono: string='fb.png'
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }

  
}
