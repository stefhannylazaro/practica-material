import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public  _firestoreService:FirestoreService 
  ) { }

  ngOnInit() {
  }
  ver(){
    console.log("shor form crear");
    this._firestoreService.load=true;
  }

}
