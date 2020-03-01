import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Observable } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';





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
  personas: any[] = [];
  otroArray: any[] = [];
  personasObs: Observable<any[]>;
  isLoading: boolean = false;

  columnsToDisplay: string[] = ['avatar', 'nombre', 'apellido', 'email', 'ciudad', 'sueldo'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.getPersonas()

  }

  ngAfterViewInit() {

  }

  getPersonas() {
    this.isLoading = true;
    this.personasObs = this.personasService.getPersonas();


    this.personasObs.subscribe(
      data => {
        this.personas = data
        //console.log(this.personas);
      },
      err => console.log(err),
      () => {
        this.paginador();
        this.isLoading = false});

  }

  paginador(){
    this.dataSource= new MatTableDataSource(this.personas);
    this.dataSource.paginator = this.paginator;
  }


}


