import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor( private personasService: PersonasService) { }

  personas: any[]=[];

  ngOnInit(): void {

    this.personasService.getPersonas().subscribe(
      data => {
        data.forEach(element =>{
          this.personas.push(element);
        } )
      },
      err => console.log(err),
      () => console.log("okey")
    );

    console.log(this.personas);
  }


}
