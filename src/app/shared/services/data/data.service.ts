import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

import { catchError, map, Observable } from 'rxjs';
import Task from '@interfaces/Task';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getData(): Observable<Task[]> {
    const placeRef = collection(this.firestore, 'Tasks');

    let data: Observable<Task[]> = (
      collectionData(placeRef, {
        idField: 'id',
      }) as Observable<Task[]>
    ).pipe(
      map((tasks: Task[]) => {
        return tasks.map((task: Task) => {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            date: new Date(task.date),
            done: task.done,
          };
        });
      }),
      catchError((error: any) => {
        throw error;
      })
    );

    return data;
  }

  async addData(data: Task): Promise<void> {
    const placeRef = collection(this.firestore, 'Tasks');

    await addDoc(placeRef, data);
  }
}
