import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _angularFirestore:AngularFirestore
  ) { }

  listClients(){
    return this._angularFirestore.collection('cliente').snapshotChanges();
  }
  getClient(id:string){

  }
  deleteClient(id:string){

  }
  addClient(data){

  }
}
