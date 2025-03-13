import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data/data.service';
import Task from '@interfaces/Task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private db: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.db.getData().subscribe((data: Task[]) => {
      console.log(data);
    });
  }
}
