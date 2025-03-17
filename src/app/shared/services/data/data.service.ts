import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

import { catchError, map, Observable } from 'rxjs';
import Task from '@models/Task';
import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly TABLE: string = 'Tasks';

  constructor(private firestore: Firestore) {}

  getData(): Observable<Task[]> {
    const placeRef = collection(this.firestore, this.TABLE);

    return collectionData(placeRef, {
      idField: 'id',
    }) as Observable<Task[]>;
  }

  async addData(data: Task): Promise<void> {
    const placeRef = collection(this.firestore, this.TABLE);

    await addDoc(placeRef, data);
  }

  async updateData(data: Task): Promise<void> {
    const placeRef = doc(this.firestore, this.TABLE, data.id ?? '');
    const { id, ...datas } = data;

    return setDoc(placeRef, datas);
  }

  async deleteData(id: string): Promise<void> {
    const placeRef = doc(this.firestore, this.TABLE, id);

    return deleteDoc(placeRef);
  }
}
