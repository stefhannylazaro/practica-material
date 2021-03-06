import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs'
import {ClienteI} from '../../models/cliente'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public selectedClient:ClienteI={
    id:null,
    email:'',
    name:'',
    order:''
  };
  public loadForm:boolean=false;
  constructor(
    private _angularFirestore:AngularFirestore
  ) { }

  listClients():Observable<any>{
    return this._angularFirestore.collection('cliente').snapshotChanges();
  }
  getClient(id:string){

  }
  deleteClient(id:string){
    return this._angularFirestore.collection('cliente').doc(id).delete();
  }
  addClient(data){
    return this._angularFirestore.collection('cliente').add(data);
  }
  editClient(data){
    return this._angularFirestore.collection('cliente').doc(data.id).set(data);
  }
}
