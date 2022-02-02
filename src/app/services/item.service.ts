import { Injectable } from '@angular/core';
import { Item } from './../model/item';
import { Firestore, addDoc, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemService {

  constructor(private firestore: Firestore) {}

  collectionRef = collection(this.firestore, 'items')

  addItem(item: Item) {
    return addDoc(this.collectionRef, item);
  }

  getItems(): Observable<Item[]> {
    return collectionData(this.collectionRef, {idField: 'itemId'}) as Observable<Item[]>
  }

}
