import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-acerca',
  imports: [],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent implements AfterViewInit{
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }
}
