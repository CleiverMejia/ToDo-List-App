import { Injectable } from '@angular/core';
import Task from '@models/Task'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setTask(task: Task): void {
    localStorage.setItem('task', JSON.stringify(task))
  }

  getTask(): any {
    let task = localStorage.getItem('task')

    if(task) return JSON.parse(task)
  }

  clearTask(): void {
    localStorage.setItem('task', '')
  }
}
