import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

//
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private personasService: PersonasService) { }


  cols: any[];
  displayedColumns: string[] = ['avatar', 'nombre'];
  dataSource: string;
  personas: any[] = [];
  otroArray: any[] = [];

  ngOnInit(): void {

    this.cols = [
      { nombre: 'avatar', display: "Avatar", width: '10%' },
      { nombre: 'nombre', display: "Nombre" },
      { nombre: 'apellido', display: "Apellido" },
      { nombre: 'email', display: "E-mail" },
      { nombre: 'ciudad', display: "Ciudad" },
      { nombre: 'sueldo', display: "Sueldo" }

    ]
    this.getPersonas()



  }

  getPersonas() {
    this.personasService.getPersonas().subscribe(
      data => {
        this.personas = data
        //console.log(this.personas);
      },
      err => console.log(err),
      () => console.log(this.personas.length))
  }
}
