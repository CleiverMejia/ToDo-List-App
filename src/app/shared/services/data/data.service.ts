import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import Task from '../../interfaces/Task';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getData(): Observable<Task[]> {
    const placeRef = collection(this.firestore, 'Tasks');

    return collectionData(placeRef, {
      idField: 'id',
    }) as Observable<Task[]>;
  }

  async addData(data: Task): Promise<void> {
    const placeRef = collection(this.firestore, 'Tasks');

    await addDoc(placeRef, data);
  }
}
