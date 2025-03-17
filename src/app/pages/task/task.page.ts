import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/tasks/services/storage/storage.service';
import Task from '@models/Task';
import { DataService } from '@services/data/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
  standalone: false,
})
export class TaskPage implements OnInit {
  public act: string = '';
  public task!: Task;
  public myForm: FormGroup;
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancelar',
      handler: () => {},
    },
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        this.deleteTask();
      },
    },
  ];

  constructor(
    private actRoute: ActivatedRoute,
    private storage: StorageService,
    private form: FormBuilder,
    private data: DataService,
    private router: Router
  ) {
    this.act = this.actRoute.snapshot.paramMap.get('act') as string;
    this.getTask();
    this.myForm = this.form.group({
      title: [this.task.title, [Validators.required, Validators.minLength(1)]],
      description: [
        this.task.description,
        [Validators.required, Validators.minLength(1)],
      ],
    });
  }

  ngOnInit() { }

  getTask(): void {
    if (this.isCreate()) {
      this.task = {
        id: '',
        title: '',
        description: '',
        date: new Date(),
        done: false,
      };

      return;
    }

    this.task = this.storage.getTask();
  }

  onSubmit(): void {
    if (this.isCreate()) {
      this.data.addData({
        ...this.myForm.value,
        date: new Date().toDateString(),
        done: false,
      });
    } else {
      this.data.updateData({
        ...this.myForm.value,
        id: this.task.id,
        date: this.task.date,
        done: this.task.done,
      });
    }

    this.clearTask();
    this.router.navigate(['/home']);
  }

  deleteTask(): void {
    this.data.deleteData(this.task.id ?? '');

    this.clearTask();
    this.router.navigate(['/home']);
  }

  clearTask() {
    this.storage.clearTask();
  }

  isCreate(): boolean {
    return this.act === 'create';
  }
}
