import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {ClienteI} from '../../models/cliente';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-list-custom',
  templateUrl: './list-custom.component.html',
  styleUrls: ['./list-custom.component.css']
})
export class ListCustomComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'acciones'];
  dataSource = new MatTableDataSource();//vacio
  public listClient:Array<ClienteI>;

  constructor(
    private _firestoreService:FirestoreService
  ) {
    this.listClient=[];
  }

  ngOnInit() {
    console.log("init");
    this._firestoreService.listClients().subscribe(
      (result)=>{
        this.listClient=[];
        console.log(result);
        result.forEach((element)=>{
          this.listClient.push({
            id:element.payload.doc.id,
            email:element.payload.doc.data().email,
            name:element.payload.doc.data().name,
            order:element.payload.doc.data().order
          })
        });
        console.log(this.listClient);
        this.dataSource.data=this.listClient;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteC(id:string){
    console.log("delete");
    this._firestoreService.deleteClient(id);
  }
  editC(data){
    //console.log(data);
    this._firestoreService.selectedClient=data;//carga data a la propiedad selected en service
    this._firestoreService.loadForm=true;//actualizo el servicio
    //console.log(this._firestoreService.selectedClient);
  }

}
