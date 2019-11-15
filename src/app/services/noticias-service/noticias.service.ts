import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/models/noticia.models';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http: HttpClient) { }

  verNoticias(): Observable <any> {
    return this.http.get<Noticia[]>("https://localhost:44381/api/Noticia/obtener");
  }

  porNoticiaID(noticiaID: number): Observable<Noticia>
  {
    return null;
  }

  eliminarNoticia(noticiaID: number): Observable<boolean>
  {
    return this.http.get<boolean>("https://localhost:44381/api/Noticia/eliminar/" + noticiaID);
  }

  // public List<Autor>()ListadoAutores{
  //   try {
  //     // var autores = _Notici
  //   } catch (error) {
  //     return new List<Autor>();
  //   }
  // }
  

}
