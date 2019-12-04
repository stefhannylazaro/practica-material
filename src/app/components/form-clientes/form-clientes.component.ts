import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import {ClienteI} from '../../models/cliente.interface';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit,DoCheck, AfterViewChecked {
  public formClient = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('',Validators.required),
      order: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ])
  });
  constructor(
    private  _firestoreService: FirestoreService 
  ) {
  }
  ngOnInit() {
    this.formClient.setValue(this._firestoreService.selected);
  }
  getErrorMessageEmail() {
    return this.formClient.get('email').hasError('required') ? 'Email requqrido' :
            this.formClient.get('email').hasError('email') ? 'Formato email incorrecto' :
            '';
  }
  ngDoCheck(){
    console.log("docheck form"); 
    console.log(this.formClient.value);
    console.log(this._firestoreService.selected);
    console.log(this.formClient.value);
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked");
    
  }
  onSubmit(form){
    console.log(form);
    if(this.formClient.value.id==="" || this.formClient.value.id===null){//crear
      this. _firestoreService.createCliente(form).then(() => {
        console.log('Documento creado exitósamente!');
        this.exit();
      }, (error) => {
        console.error(error);
      });
    } else {
      console.log('editar');
      this._firestoreService.editCliente(this.formClient.value).then(
        ()=>{
          this.exit();
        }, (error)=>{
        }
      );
    }
  }

  exit(){
    this.formClient.setValue({id:null,name: '', email: '',order:''});
    this._firestoreService.selected=this.formClient.value;
    this._firestoreService.load=false;
  }
}
