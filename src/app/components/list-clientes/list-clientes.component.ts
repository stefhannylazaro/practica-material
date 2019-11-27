import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ClienteI} from '../../models/cliente.interface'
import { FirestoreService } from '../../services/firestore/firestore.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
];
@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})

export class ListClientesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'weight'];//coinciden con la interface
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private  _firestoreService: FirestoreService 
  ) { 

  }

  ngOnInit() {
    console.log("init");
    this._firestoreService.getClientes().subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{

      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
