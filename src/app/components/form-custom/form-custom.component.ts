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
  }

  onSubmit(form){
    console.log(form);
    this._firestoreService.addClient(form);
  }

}
