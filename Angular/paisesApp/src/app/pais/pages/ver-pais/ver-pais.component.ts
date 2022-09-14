import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

    let code=this.activateRoute.snapshot.paramMap.get("id");
    console.log(code)

    this.activateRoute.params.subscribe(params=>{
      console.log(params);
    })

    // this.activateRoute.params
    // // .pipe(switchMap((params)=>this.paisService.getPaisPorId(params)))
    // .subscribe((response=>{
    //   console.log(response)
    // })
  }

}
