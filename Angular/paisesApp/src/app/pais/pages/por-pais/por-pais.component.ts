import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  constructor(private paisServices:PaisService) { }

  termino: string=""
  hayError: boolean=false;
  paises: Country[]=[];

  buscar(termino:string){
    this.hayError=false;
    this.termino = termino;

    this.paisServices.buscarPais(this.termino).subscribe(pais => {
      this.paises=pais;

    }, (err)=>{
      this.hayError=true;  
      this.paises=[];
    });
  }
  sugerencias(termino:String){
    this.hayError=false;
    //TODO: crear Sugerencias
  }
}
