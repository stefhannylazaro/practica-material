import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';//add
import {ClienteI} from '../../models/cliente.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public selected:ClienteI={
    id:null,
    name:'',
    email:'',
    order:''
  }
  public load:boolean=false;
  constructor(private firestore:AngularFirestore) {
  }
  public getClientes():Observable<any>{
    return this.firestore.collection('cliente').snapshotChanges();
  }
  
  public editCliente(data){
    let id=data.id;
    return this.firestore.collection('cliente').doc(id).set(data);//update
  }

  public deleteCliente(id:string){
    return this.firestore.collection('cliente').doc(id).delete();
  }

  public createCliente(data) {
    return this.firestore.collection('cliente').add(data);
  }
}
