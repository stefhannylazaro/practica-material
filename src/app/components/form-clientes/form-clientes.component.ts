import { Component, OnInit } from '@angular/core';
import {ClienteI} from '../../models/cliente.interface';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
  public formClient = new FormGroup({
      name: new FormControl('',Validators.required),
      order: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ])
  });
  constructor(
    private  _firestoreService: FirestoreService 
  ) { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form);
    this. _firestoreService.createCliente(form).then(() => {
      console.log('Documento creado exitósamente!');
      this.formClient.setValue({
        name: '',
        order: '',
        email: ''
      });
    }, (error) => {
      console.error(error);
    });
  }
}
