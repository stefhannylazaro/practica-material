import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-custom',
  templateUrl: './form-custom.component.html',
  styleUrls: ['./form-custom.component.css']
})
export class FormCustomComponent implements OnInit {
  public formClient = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    order: new FormControl("")
  });
  constructor() { }

  ngOnInit() {
  }

}
