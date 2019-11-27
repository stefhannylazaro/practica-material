import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';//add

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore) {

  }
  public getClientes():Observable<any>{
    return this.firestore.collection('cliente').snapshotChanges();
  }

}
