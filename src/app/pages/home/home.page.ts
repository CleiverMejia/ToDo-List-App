import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data/data.service';
import Task from '@models/Task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.setTasks();
  }

  setTasks() {
    this.dataService.getData().subscribe({
      next: (data: Task[]) => {
        this.tasks = data;
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  searchTasks(event: Event) {
    const target = event.target as HTMLInputElement;

    this.dataService.getData().subscribe({
      next: (data: Task[]) => {
        this.tasks = !target.value
          ? data
          : data.filter((task) =>
              task.title.toLowerCase().includes(target.value.toLowerCase())
            );
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }
}
