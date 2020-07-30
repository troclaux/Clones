import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

class Republica {

  titulo: string;
  subtitulo: string;
  imagem: string;

}

class Republica2 {

  titulo: string;
  subtitulo: string;
  imagem: string;

}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  /* republicas: Republica[];
  republicas2: Republica2[]; */

  public republicasArray = [];
  
  constructor(public searchService: SearchService) {}

  republicas() {
    this.searchService.getListRepublics().subscribe((res) => {
      this.republicasArray = res;
    });
  }

  ngOnInit() {

    this.republicas();  

    /* this.republicas = [
      {
        titulo: "República Estudantil, UFRJ-Fundão",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/republica.jpg",
      },
      {
        titulo: "República Estudantil, UERJ",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa1.jpg",
      },
      {
        titulo: "República Estudantil, UFF-Niterói",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa2.jpg",
      },
      {
        titulo: "República Estudantil, UFRJ-Fundão",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa3.jpg",
      }

    ]; */

    /* this.republicas2 = [
      {
        titulo: "República Estudantil, UFRJ-Fundão",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa4.jpg",
      },
      {
        titulo: "República Estudantil, UERJ",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa5.png",
      },
      {
        titulo: "República Estudantil, UFF-Niterói",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa6.jpg",
      },
      {
        titulo: "República Estudantil, UFRJ-Fundão",
        subtitulo: "Rio de Janeiro",
        imagem: "../assets/casa7.jpg",
      }
    ]; */
  }
}

