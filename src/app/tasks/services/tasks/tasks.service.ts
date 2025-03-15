import { Injectable } from '@angular/core';

import Task from '@interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  filterTaks(tasks: Task[], search: string): Task[] {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase()));
  }
}
