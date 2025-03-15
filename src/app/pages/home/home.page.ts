import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data/data.service';
import Task from '@interfaces/Task';
import { TasksService } from '../../tasks/services/tasks/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public allTasks: Task[] = [];
  public tasks: Task[] = [];
  public searchText: string = '';

  constructor(
    private dataService: DataService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.dataService.getData().subscribe({
      next: (data: Task[]) => {
        this.allTasks = data;
        this.tasks = this.allTasks
      },
      error: (error: Error) => {
        console.error(error);
      }
    });
  }

  searchTasks(event: Event) {
    const target = event.target as HTMLInputElement;

    if(!target.value) {
      this.tasks = this.allTasks;
      return;
    }

    this.tasks = this.tasksService.filterTaks(
      this.allTasks,
      target.value ?? ''
    );
  }
}
