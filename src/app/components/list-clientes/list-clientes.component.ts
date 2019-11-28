import { Component, OnInit, DoCheck } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ClienteI} from '../../models/cliente.interface';
import { FirestoreService } from '../../services/firestore/firestore.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079},
//   {position: 2, name: 'Helium', weight: 4.0026},
//   {position: 3, name: 'Lithium', weight: 6.941}
// ];

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})

export class ListClientesComponent implements OnInit,DoCheck {
  displayedColumns: string[] = ['id', 'name', 'email','action'];//coinciden con la interface
  dataSource = new MatTableDataSource();
  public listClientes:ClienteI[]=[];
  
  constructor(
    private  _firestoreService: FirestoreService 
  ) {}

  ngOnInit() {
    this._firestoreService.getClientes().subscribe(
      (result)=>{
        result.forEach(element => {
          this.listClientes.push({
            id:element.payload.doc.id,
            name:element.payload.doc.data().name,
            email:element.payload.doc.data().email,
            order:element.payload.doc.data().order,
          });
        });
        this.dataSource.data=this.listClientes;
        //dataSource:contiene los datos a renderizar en la tabla
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editC(element){
    console.log(element);
    

  }
  deleteC(id){
    this._firestoreService.deleteCliente(id).then(() => {
      console.log('Documento eliminado!');
      //actualizar data de la tabla
    }, (error) => {
      console.error(error);
    });
  }

  ngDoCheck(){
    
  }
  

}
