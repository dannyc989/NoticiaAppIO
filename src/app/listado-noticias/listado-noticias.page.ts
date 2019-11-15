import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias-service/noticias.service';
import { Noticia } from '../models/noticia.models';
import { Router, Route } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {
  noticias: Noticia[];

  constructor(private noticiaServicio: NoticiasService, private route: Router) { }

  ngOnInit() {
    this.noticiaServicio.verNoticias().subscribe((noticias)=>{
      this.noticias = noticias;
      //this.noticiaServicio.verNoticias
      console.log(noticias);
    },(errorObtenido)=>{
      console.log(errorObtenido);
    }
    )
  }

  eliminarNoticia(noticiaID: number, indice: number){
    console.log(this.noticias);
    console.log(indice);
    
    this.noticiaServicio.eliminarNoticia(noticiaID).subscribe(()=>{
        this.noticias.splice(indice,1);
        console.log("noticia Eliminada");
      },
      error=>{
        console.log(error);
      }
    ); 
  }

  irADetalle(noticia: Noticia){
    this.route.navigate(['noticia-detalle',{noticia: JSON.stringify(noticia)}]);
  }

}
