import { Component, OnInit } from '@angular/core';
import {ClienteI} from '../../models/cliente.interface';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  constructor(
    private  _firestoreService: FirestoreService 
  ) { }

  ngOnInit() {
  }

}
