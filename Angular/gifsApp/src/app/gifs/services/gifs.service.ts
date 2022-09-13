import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[]=[];
  private apiKey:string='6bxLi1c9ytBN6xMpCTEZqgYl3N0GyKG9';
  private servicioUrl='https://api.giphy.com/v1/gifs';

  public resultados:Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient ){
    if(localStorage.getItem('Historial')){
      this._historial=JSON.parse(localStorage.getItem('Historial')!);
    }
    if(localStorage.getItem('Resultados')){
      this.resultados=JSON.parse(localStorage.getItem('Resultados')!);
    }
  }

  buscarGifs (query: string){

    query=query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('Historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams().set('api_key',this.apiKey).set('limit','10').set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((response) =>{
        this.resultados=response.data;
        localStorage.setItem('Resultados',JSON.stringify(this.resultados));
      })
  }
}
