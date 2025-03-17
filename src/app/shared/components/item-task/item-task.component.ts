import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data/data.service';
import { StorageService } from 'src/app/tasks/services/storage/storage.service';

@Component({
  selector: 'app-item-task',
  templateUrl: './item-task.component.html',
  styleUrls: ['./item-task.component.scss'],
  standalone: false
})
export class ItemTaskComponent  implements OnInit {
  @Input() idTask: any = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: Date = new Date();
  @Input() done: boolean = false;

  constructor(
    private router: Router,
    private storage: StorageService,
    private data: DataService
  ) { }

  ngOnInit() {}

  openTask() {
    this.storage.setTask({
      id: this.idTask,
      title: this.title,
      description: this.description,
      date: this.date,
      done: this.done
    })

    this.router.navigate(['/task/edit'])
  }

  setDone(event: any) {
    this.data.updateData({
      id: this.idTask,
      title: this.title,
      description: this.description,
      date: this.date,
      done: event.detail.checked
    })
  }
}
