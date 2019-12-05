import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl ,Validators } from '@angular/forms';
import {FirestoreService} from '../../services/firestore/firestore.service';
@Component({
  selector: 'app-form-custom',
  templateUrl: './form-custom.component.html',
  styleUrls: ['./form-custom.component.css']
})
export class FormCustomComponent implements OnInit {
  public formClient = new FormGroup({
    id:new FormControl(null),
    name: new FormControl("",Validators.required),
    email: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    order: new FormControl("",Validators.required)
  });
  constructor(private _firestoreService:FirestoreService) {

  }

  ngOnInit() {
    //console.log(this._firestoreService.selectedClient);
    this.formClient.setValue(this._firestoreService.selectedClient);
    console.log(this.formClient.value);
  }

  onSubmit(form){
    //console.log(form);
    if(this.formClient.value.id==null){//crear
      this._firestoreService.addClient(form).then(()=>{//success
        //mostrar msg
        this.cancel();
        }
      ).catch((error)=>{
        console.log(error);
      })
    }else {//editar
      console.log("editaaaaa");
      this._firestoreService.editClient(this.formClient.value).then(()=>{
        this.cancel();
      })
    } 
  }

  cancel(){
    this.formClient.setValue({
      id:null,
      name:'',
      email:'',
      order:''
    });
    this._firestoreService.selectedClient=this.formClient.value;
    this._firestoreService.loadForm=false;
  }

  getErrorsEmail(){   
    return  this.formClient.get('email').hasError('required')? 'Email obligatorio': 
            this.formClient.get('email').hasError('email')? 'Email formato incorrecto':'';
  }


}
